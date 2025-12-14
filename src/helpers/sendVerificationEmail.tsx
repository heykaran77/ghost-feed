import { resend } from "@/lib/resend";
import VerificationEmail from "@/components/emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const {} = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "GhostFeed - Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return {
      success: true,
      message: "Verification email sent successfully",
    };
  } catch (error) {
    console.log("Error sending verification email.", error);
    return { success: false, message: "Failed to send verification email" };
  }
}
