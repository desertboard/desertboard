import { resend } from "@/lib/resendClient";

export default async () => {
    const { error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: `<div>Hello</div>`,
    });
  
    if (error) {
      return false;
    }
    
    console.log("Mail send")
    return true;
  };