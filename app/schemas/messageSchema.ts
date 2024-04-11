
import {z} from "zod"

export const MessageSchema = z.object({
    constent:z
    .string()
    .min(10,{message:'content must be atleast 10 characters'})
    .max(200, {message:'content cannot be of 200 characters'})
    
})