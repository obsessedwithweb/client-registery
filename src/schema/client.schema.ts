import {z} from "zod";
import {ClientType, Gender} from "../../generated";

export const GenderSchema = z.enum(Gender).default(Gender.MALE);

export type GenderType = `${z.infer<typeof GenderSchema>}`

export const ClientTypeSchema = z.enum(ClientType).default(ClientType.INDIVIDUAL);

export type ClientTypeType = `${z.infer<typeof ClientTypeSchema>}`

export const ClientSchema = z.object({
    gender: GenderSchema.optional(),
    type: ClientTypeSchema.optional(),
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string().default("Algeria"),
    image: z.string().nullable().optional(),
    telegram: z.string().nullable().optional(),
    whatsapp: z.string().nullable().optional(),
    facebook: z.string().nullable().optional(),
    instagram: z.string().nullable().optional(),
})

export type Client = z.infer<typeof ClientSchema>