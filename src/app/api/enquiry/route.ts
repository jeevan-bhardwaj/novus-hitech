import { NextResponse } from "next/server";

const RECIPIENT = "jeevanbhardwaj001@gmail.com";
const ZOHO_WEB_TO_LEAD_URL = "https://crm.zoho.com/crm/WebToLeadForm";

// Default Zoho credentials from web-to-lead form
const ZOHO_XNQSJSDP =
  process.env.ZOHO_CRM_XNQSJSDP ||
  "1c7990ccd142310c0aa9ed5cf001df699f983babfcae03d7febbb19817e8734c";
const ZOHO_XMIWTLD =
  process.env.ZOHO_CRM_XMIWTLD ||
  "a4967ec3edcaccd36463305f47809aad82dd00e5a8e94026326bf9260ec33f7bc9b066b626b735268a26ae42ed439ac9";
const ZOHO_ACTION_TYPE = process.env.ZOHO_CRM_ACTION_TYPE || "TGVhZHM=";
const ZOHO_RETURN_URL =
  process.env.ZOHO_CRM_RETURN_URL || "https://solar.novushitech.com/";




function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanString(val: unknown, fallback = ""): string {
  return typeof val === "string" ? val.trim() : fallback;
}

function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  if (!trimmed) {
    return { firstName: "Website", lastName: "Lead" };
  }
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: parts[0] };
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ error: "Invalid enquiry data." }, { status: 400 });
  }

  const rawName = cleanString(payload.name);
  const rawFirstName = cleanString(payload.firstName);
  const rawLastName = cleanString(payload.lastName);
  const email = cleanString(payload.email);
  const phone = cleanString(payload.phone);
  const company = cleanString(payload.company);
  const designation = cleanString(payload.designation);
  const interest = cleanString(payload.interest || payload.interested_in);
  const meetingType = cleanString(payload.meeting_type || payload.preferred_day || payload.preferredDay);
  const message = cleanString(payload.message);
  const eventSource = cleanString(payload.eventSource || payload.event_source);
  const subject = cleanString(payload.subject, "Solar & BESS Website Enquiry");
  const zcGad = cleanString(payload.zc_gad);
  const pageUrl = cleanString(payload.pageUrl) || request.headers.get("referer") || "";
  // Always pass the authorized Zoho return URL so Zoho CRM's domain security doesn't drop localhost or subdomain leads
  const zohoReturnUrl = ZOHO_RETURN_URL;

  console.log(">>> [Enquiry Form Received]:", {
    name: rawName || `${rawFirstName} ${rawLastName}`.trim(),
    email,
    phone,
    company,
    pageUrl,
    eventSource,
  });

  // Validate essential fields
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!phone) {
    return NextResponse.json(
      { error: "Please provide a contact phone number." },
      { status: 400 }
    );
  }

  if (!company) {
    return NextResponse.json(
      { error: "Please provide your company name." },
      { status: 400 }
    );
  }

  const { firstName, lastName } =
    rawFirstName && rawLastName
      ? { firstName: rawFirstName, lastName: rawLastName }
      : splitFullName(rawName || "Valued Contact");

  // Construct structured description for Zoho CRM (avoids strict picklist validation errors)
  const descriptionParts: string[] = [];
  if (interest) descriptionParts.push(`Interest: ${interest}`);
  if (meetingType) descriptionParts.push(`Preferred Meeting Day: ${meetingType}`);
  if (designation) descriptionParts.push(`Designation: ${designation}`);
  if (message) descriptionParts.push(`Message:\n${message}`);
  if (eventSource) descriptionParts.push(`Form Source: ${eventSource}`);
  if (pageUrl) descriptionParts.push(`Page URL: ${pageUrl}`);
  if (subject) descriptionParts.push(`Subject: ${subject}`);
  const description = descriptionParts.join("\n\n");

  // 1. Submit lead to Zoho CRM Web-to-Lead
  try {
    const zohoParams = new URLSearchParams({
      xnQsjsdp: ZOHO_XNQSJSDP,
      xmIwtLD: ZOHO_XMIWTLD,
      actionType: ZOHO_ACTION_TYPE,
      returnURL: zohoReturnUrl,
      "First Name": firstName,
      "Last Name": lastName,
      Company: company,
      Email: email,
      Phone: phone,
      ...(designation ? { Designation: designation } : {}),
      ...(description ? { Description: description } : {}),
      zc_gad: zcGad,
      aG9uZXlwb3Q: "",
    });

    const zohoResponse = await fetch(ZOHO_WEB_TO_LEAD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: zohoParams.toString(),
    });

    if (zohoResponse.ok) {
      console.log(">>> [Zoho CRM]: Lead successfully posted to Zoho CRM!");
    } else {
      console.warn(">>> [Zoho CRM]: Web-to-Lead returned status:", zohoResponse.status);
    }

  } catch (zohoError) {
    console.error("Error submitting lead to Zoho CRM:", zohoError);
    // Continue so we don't block the user, but log the error
  }

  // 2. Conditionally send notification email via Resend if credentials exist
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM_EMAIL;

  if (resendApiKey && resendFrom) {
    try {
      const emailBody = [
        "A new website enquiry was submitted and forwarded to Zoho CRM.",
        "",
        `Name: ${firstName} ${lastName}`.trim(),
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        ...(designation ? [`Designation: ${designation}`] : []),
        ...(interest ? [`Interest: ${interest}`] : []),
        ...(meetingType ? [`Meeting Preference: ${meetingType}`] : []),
        ...(eventSource ? [`Event Source: ${eventSource}`] : []),
        ...(message ? ["", `Message:`, message] : []),
      ].join("\n");

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [RECIPIENT],
          reply_to: email,
          subject: `[Lead] ${subject} - ${company}`,
          text: emailBody,
        }),
      });
    } catch (resendError) {
      console.error("Error sending Resend email notification:", resendError);
    }
  }

  return NextResponse.json({ sent: true, success: true });
}

