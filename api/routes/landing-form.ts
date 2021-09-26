import express, { Request, Response } from "express";
import fetch from "cross-fetch";
import { sendEmail } from "../utils/sendEmail";

const landingFormRouter = express.Router();

interface FormData {
  name: string;
  email: string;
  favSourceControlTool: string;
  teamSize: number;
}

const sendSlackMessage = async (formData: FormData) => {
  const data = {
    text: `New landing page form submit!
          name: ${formData.name}
          email: ${formData.email}
          favourite source control tool: ${formData.favSourceControlTool}
          team size: ${formData.teamSize}`,
  };

  const slackURL = process.env.SLACK_URL ?? "";

  await fetch(slackURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const sendConfirmationEmail = async (senderEmail: string, name: string) => {
  const subject = "Thank you from CodeBox";
  const text = `Thanks ${name} for your interest in CodeBox, we'll get back to you shortly!`;
  await sendEmail({ to: senderEmail, subject, text });
};

const sendEmailToCompany = async (formData: FormData) => {
  const subject = "New landing page form submission";
  const text = `
    name: ${formData.name}
    email: ${formData.email}
    favourite source control tool: ${formData.favSourceControlTool}
    team size: ${formData.teamSize}
  `;
  await sendEmail({ subject, text });
};

landingFormRouter.post("/landing-form", async (req: Request, res: Response) => {
  const formData: FormData = {
    name: req.body.name,
    email: req.body.email,
    favSourceControlTool: req.body.favSourceControlTool,
    teamSize: req.body.teamSize,
  };

  try {
    await sendEmailToCompany(formData);
    await sendSlackMessage(formData);
    await sendConfirmationEmail(formData.email, formData.name);
  } catch (err) {
    return res.status(400).json({ message: "unable to submit form", error: err });
  }

  return res.status(200).json({ message: "successfully submitted" });
});

export default landingFormRouter;
