import { NextResponse } from "next/server";

const recipient = "jeevanbhardwaj001@gmail.com";

function isBoundedString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Enquiry email is not configured: RESEND_API_KEY and RESEND_FROM_EMAIL are required.");
    return NextResponse.json(
      { error: "Enquiry email is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  const { name, email, phone, company, eventSource, subject } = payload;

  if (
    !isBoundedString(name, 120) ||
    !isBoundedString(email, 254) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !isBoundedString(phone, 40) ||
    !isBoundedString(company, 160) ||
    typeof eventSource !== "string" ||
    eventSource.length > 120 ||
    !isBoundedString(subject, 120) ||
    /[\r\n]/.test(subject)
  ) {
    return NextResponse.json(
      { error: "Please check the form details and try again." },
      { status: 400 }
    );
  }

  const text = [
    "A new website enquiry was submitted.",
    "",
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Contact Number: ${phone.trim()}`,
    `Company: ${company.trim()}`,
    `Event source: ${eventSource.trim() || "Not specified"}`,
  ].join("\n");

  let resendResponse: Response;
  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email.trim(),
        subject: subject.trim(),
        text,
      }),
    });
  } catch (error) {
    console.error("Failed to connect to Resend for enquiry email.", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again." },
      { status: 502 }
    );
  }

  if (!resendResponse.ok) {
    console.error("Resend rejected enquiry email.", { status: resendResponse.status });
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ sent: true });
}
