import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";

export async function POST(reuest:Request) {
  await dbConnect()
  try{
    const {username, email, passsword} = await.request.json()
  //  to be continued
  }catch(error){
    console.error('Error registering user', error)
    return Response.json(
      {
        success:false,
        message:"Error registering user"
      },
      {
        status:500
      }
    )
  }
  
}