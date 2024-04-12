

import VerificationEmail from '@/components/email-template';

import { ApiResponse } from '@/types/ApiResponse';
import { resend } from '@/lib/resend';

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string,


):Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to:email,
            subject:'Verification Code',
            html:'<p> Congrats on sending you <strong> first email </strong>!</p>',
            react: VerificationEmail({username,otp:verifyCode}),
        });
        return {success:true, message:"Verificaition email send successfully"}

    }
    catch(emailError){
        console.log("Error sending verification email", emailError)
        return {success:false, message:"Failed to send verification email"}
    }


}