import {NextRequest, NextResponse} from "next/server";
import {ClientSchema} from "@/schema/client.schema";
import {prisma} from "@/lib/prisma";
import slugify from "slugify";
import {z} from "zod";


export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body)
    body.slug = slugify(body.name, {
        lower: true,
        strict: true,
        replacement: '_'
    })
    console.log(body)

    const validated = ClientSchema.extend({
        slug: z.string(),
    }).safeParse(body)
    console.log(validated)
    if (!validated.success)
        return NextResponse.json(validated.error.issues, {status: 400})


    const newClient = await prisma.client.create({
        data: validated.data
    })
    console.log(newClient)
    return NextResponse.json(newClient, {status: 201})
}