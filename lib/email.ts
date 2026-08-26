import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API Key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'social.propertybasket@gmail.com';
const ADMIN_EMAIL = 'social.propertybasket@gmail.com';

interface EmailPayload {
  to: string;
  subject: string;
  text?: string;
  html: string;
}

export const sendEmail = async (payload: EmailPayload) => {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn("SENDGRID_API_KEY is not set. Email not sent:", payload.subject);
    return false;
  }
  
  try {
    await sgMail.send({
      to: payload.to,
      from: FROM_EMAIL,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    });
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    if ((error as any).response) {
      console.error((error as any).response.body)
    }
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
