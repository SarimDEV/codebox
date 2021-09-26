import sgMail from "@sendgrid/mail";

interface sendEmail {
  to?: string;
  subject: string;
  text: string;
  html?: string;
}

export const sendEmail = async ({ to, subject, text, html }: sendEmail) => {
  const msg = {
    to: to ?? "sarimcodebox@gmail.com",
    from: "sarimcodebox@gmail.com",
    subject,
    text,
    html,
  };
  const sendGridKey = process.env.SENDGRID_API_KEY ?? "";
  sgMail.setApiKey(sendGridKey);
  await sgMail.send(msg);
};
