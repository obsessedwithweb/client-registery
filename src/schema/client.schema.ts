import {z} from "zod";
import {ClientType, Gender} from "../../generated";
import {isValidPhoneNumber} from "libphonenumber-js";
// import {isValidPhoneNumber} from "react-phone-number-input";

export const GenderSchema = z.enum(Gender).default(Gender.MALE);

export type GenderType = `${z.infer<typeof GenderSchema>}`

export const ClientTypeSchema = z.enum(ClientType).default(ClientType.INDIVIDUAL);

export type ClientTypeType = `${z.infer<typeof ClientTypeSchema>}`

export const ClientSchema = z.object({
    gender: GenderSchema.optional(),
    type: ClientTypeSchema.optional(),
    name: z.string().min(3, {error: "Enter a valid name."}),
    phone: z
        .string()
        .trim()
        .refine(isValidPhoneNumber),
    email: z.string(),
    address: z.string(),
    image: z.string().nullable().optional(),
    telegram: z.string().nullable().optional(),
    whatsapp: z.string().nullable().optional(),
    facebook: z.string().nullable().optional(),
    instagram: z.string().nullable().optional(),
})

export const UpdateClientSchema = ClientSchema.partial()

export type Client = z.infer<typeof ClientSchema>
export type UpdateClient = z.infer<typeof UpdateClientSchema>