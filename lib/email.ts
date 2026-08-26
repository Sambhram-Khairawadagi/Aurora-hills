import nodemailer from 'nodemailer';

const FROM_EMAIL = process.env.GMAIL_EMAIL || 'social.propertybasket@gmail.com';
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const ADMIN_EMAIL = 'social.propertybasket@gmail.com';

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
});

export const sendEmail = async (payload: EmailPayload) => {
  if (!APP_PASSWORD) {
    console.warn("GMAIL_APP_PASSWORD is not set. Email not sent:", payload.subject);
    return false;
  }
  
  try {
    const info = await transporter.sendMail({
      from: `"Aurora Hills" <${FROM_EMAIL}>`, // sender address
      to: payload.to, // list of receivers
      subject: payload.subject, // Subject line
      text: payload.text, // plain text body
      html: payload.html, // html body
    });
    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
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
