import { z } from "zod"

// single object
export const usernameValidation = z
    .string()
    .min(2, "Username must be atlest 2 characters")
    .max(20, "username must be no more than 20 character")
    .regex( /^[a-zA-Z0-9_]+$/, "Username must not contain special character")

// for multiple obnjects
export const signUpSchema  = z.object({
    username: usernameValidation,
    email: z.string().email({message:'Invalid email address'}),
    passwoprd: z.string().min(6,{message:'password must be atleast 6 characters'})

})    