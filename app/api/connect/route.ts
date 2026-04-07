import { NextResponse } from "next/server";
import path from "node:path";
import nodemailer from "nodemailer";

interface ConnectPayload {
  name?: string;
  email?: string;
  phone?: string;
  familyUpdates?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ConnectPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const familyUpdates = body.familyUpdates?.trim();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpSecure = process.env.SMTP_SECURE !== "false";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.MAIL_TO ?? "thesunnysidehoskins@gmail.com";
    const mailFrom = process.env.MAIL_FROM ?? smtpUser;
    const groupMeLink =
      process.env.NEXT_PUBLIC_GROUPME_URL ?? "https://groupme.com/join_group/101906028/7iDBhrT9";
    const logoCid = "sunny-side-logo@hoskins-reunion";
    const logoPath = path.join(process.cwd(), "public", "images", "sunny-side-logo.png");

    if (!smtpHost || !smtpUser || !smtpPass || !mailFrom) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: "New Connect Form Submission",
      replyTo: email,
      text: [
        "A new Connect form submission was received:",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Family updates: ${familyUpdates || "None provided"}`,
      ].join("\n"),
      html: `
        <h2>New Connect Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Family updates:</strong> ${familyUpdates || "None provided"}</p>
      `,
    });

    await transporter.sendMail({
      from: mailFrom,
      to: email,
      subject: "You're In! Sunny-Side Reunion Confirmation",
      attachments: [
        {
          filename: "sunny-side-logo.png",
          path: logoPath,
          cid: logoCid,
        },
      ],
      text: [
        `Hi ${name},`,
        "",
        "Thank you for filling out the Sunny-Side Connect form.",
        "We're excited to have you with us for reunion weekend.",
        "",
        "Join the GroupMe for updates:",
        groupMeLink,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #1a1a1a; max-width: 560px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:${logoCid}" alt="The Sunny-Side Family Logo" style="max-width: 120px; height: auto;" />
          </div>
          <h2 style="margin: 0 0 12px; color: #1a1a1a;">Hi ${name},</h2>
          <p style="margin: 0 0 10px;">Thank you for filling out the Sunny-Side Connect form.</p>
          <p style="margin: 0 0 18px;">We're excited to have you with us for reunion weekend.</p>
          <a
            href="${groupMeLink}"
            target="_blank"
            rel="noreferrer"
            style="display: inline-block; padding: 12px 20px; background: #1a1a1a; color: #d9a03c; text-decoration: none; border-radius: 8px; font-weight: 700;"
          >
            Join the GroupMe
          </a>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Connect form email error:", error);

    const maybeError = error as {
      code?: string;
      responseCode?: number;
      response?: string;
      message?: string;
    };

    if (maybeError.code === "EAUTH" || maybeError.responseCode === 535) {
      return NextResponse.json(
        {
          error:
            "Gmail rejected SMTP credentials. Use a Google App Password in SMTP_PASS (not your normal Gmail password).",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Unable to send email. Please verify SMTP settings in .env.local." },
      { status: 500 }
    );
  }
}
