import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const json = (data, init = {}) =>
    new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" }, ...init });



async function verifyRecaptcha(token) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
        console.error("Missing RECAPTCHA_SECRET_KEY");
        return { ok: false, reason: "Server misconfiguration" };
    }

    try {
        const params = new URLSearchParams();
        params.append("secret", secret);
        params.append("response", token);

        const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
        });

        const data = await res.json();

        if (!data.success) {
            return {
                ok: false,
                reason: Array.isArray(data["error-codes"])
                    ? data["error-codes"].join(", ")
                    : "Captcha failed",
            };
        }

        return { ok: true };
    } catch (e) {
        console.error("reCAPTCHA verify error:", e);
        return { ok: false, reason: "Captcha verification error" };
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const {
            fullName,
            email,
            org,
            isManufacturerOrHealthSystem,
            title,
            goals,
            how,
            captcha
        } = body || {};

        if (!fullName || !email || !org || !title || !goals) {
            return json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!captcha) {
            return json({ error: "Captcha token is missing" }, { status: 400 });
        }

        const captchaResult = await verifyRecaptcha(captcha);
        if (!captchaResult.ok) {
            return json(
                { error: `Captcha verification failed: ${captchaResult.reason}` },
                { status: 400 }
            );
        }


        const subject = `Contact form: ${fullName || 'No name'}`;
        const mhLabel = isManufacturerOrHealthSystem ? 'Yes' : 'No';

        const text = [
            `Full name: ${fullName}`,
            `Email: ${email}`,
            `Organization: ${org}`,
            `Job title: ${title}`,
            `Manufacturer or Health System: ${mhLabel}`,
            '',
            `Goals:`,
            goals,
            '',
            `How did you hear about us?:`,
            how || '(not provided)',
            '',
        ].join('\n');

        const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.45;color:#111">
        <h2 style="margin:0 0 12px">New contact form submission</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><strong>Full name</strong></td><td>${escapeHtml(fullName)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Organization</strong></td><td>${escapeHtml(org)}</td></tr>
          <tr><td><strong>Job title</strong></td><td>${escapeHtml(title)}</td></tr>
          <tr><td><strong>Manufacturer/Health System</strong></td><td>${mhLabel}</td></tr>
          <tr><td><strong>Goals</strong></td><td>${nl2br(escapeHtml(goals))}</td></tr>
          <tr><td><strong>How did you hear</strong></td><td>${nl2br(escapeHtml(how || ''))}</td></tr>
        </table>
      </div>
    `;

        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM,
            to: process.env.CONTACT_TO,
            reply_to: email,
            subject,
            text,
            html,
        });

        if (error) {
            console.error("[Resend] send error:", error);
            return json({ error: error }, { status: 500 });
        }

        return json({ ok: true });
    } catch (e) {
        console.error("[contact POST] error:", e);
        return json({ error: "Server error" }, { status: 500 });
    }
}

function escapeHtml(s = "") {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
function nl2br(s = '') {
    return String(s).replace(/\n/g, "<br/>");
}
