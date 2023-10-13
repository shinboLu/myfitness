import * as z from "zod";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const UserValidation = z.object({
  profile_photo: z.string().url(),
  fullname: z
    .string()
    .min(2, { message: "More than 2 characters" })
    .max(30, { message: "Less than 30 characters" }),
  username: z
    .string()
    .min(2, { message: "More than 2 characters" })
    .max(30, { message: "Less than 30 characters" }),
  bio: z.string().min(2).max(1000),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(phoneRegex, { message: "Invalid phone number" }),
});
