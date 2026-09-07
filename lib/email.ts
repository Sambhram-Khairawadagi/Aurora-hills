import nodemailer from 'nodemailer';

const FROM_EMAIL = process.env.GMAIL_EMAIL || 'social.propertybasket@gmail.com';
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || 'nrxyglsfkcabzsly';
const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'social.propertybasket@gmail.com';

interface EmailPayload {
  to: string;
  subject: string;
  text?: string;
  html: string;
}

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: FROM_EMAIL,
    pass: APP_PASSWORD,
  },
  pool: false, // In serverless, avoid connection pooling issues
  connectionTimeout: 4000,
  greetingTimeout: 4000,
  socketTimeout: 5000,
} as any);

export const sendEmail = async (payload: EmailPayload): Promise<boolean> => {
  if (!APP_PASSWORD) {
    console.warn("GMAIL_APP_PASSWORD is not set. Email not sent:", payload.subject);
    return false;
  }
  
  try {
    const sendPromise = transporter.sendMail({
      from: `"The Aurora Hills" <${FROM_EMAIL}>`,
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    });

    // 5-second hard timeout to protect serverless function response time
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Email sending timed out")), 5000)
    );

    const info = await Promise.race([sendPromise, timeoutPromise]);
    console.log("Email successfully sent: %s", (info as any)?.messageId);
    return true;
  } catch (error: any) {
    console.error("Error sending email:", error?.message || error);
    return false;
  }
};

export const sendAdminNotification = async (type: 'Lead' | 'Site Visit', details: any) => {
  const html = `
    <h2>New ${type} Submission</h2>
    <p>A new form has been submitted.</p>
    <ul>
      ${Object.entries(details)
        // Filter out empty or uninteresting fields if needed, but for now show all
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('')}
    </ul>
  `;

  return sendEmail({
    to: ADMIN_EMAIL,
    subject: `New ${type} Submission - Aurora Hills`,
    html,
  });
};

export const sendUserConfirmation = async (userEmail: string, userName: string) => {
  if (!userEmail) return false;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>Thank You for Your Interest, ${userName}!</h2>
      <p>We have received your details and our team will get in touch with you shortly.</p>
      <br/>
      <p>Best Regards,</p>
      <p><strong>Aurora Hills Team</strong></p>
    </div>
  `;

  return sendEmail({
    to: userEmail,
    subject: `Thank you for your interest in Aurora Hills!`,
    html,
  });
};
