import {NextRequest, NextResponse} from "next/server";
import {ClientSchema} from "@/schema/client.schema";
import {prisma} from "@/lib/prisma";
import slugify from "slugify";
import {z} from "zod";


export async function POST(request: NextRequest) {
    const body = await request.json()

    if (body.name && !body.slug) {
        body.slug = slugify(body.name, {
            lower: true,
            strict: true,
            replacement: '_'
        })
    }

    const validated = ClientSchema.extend({
        slug: z.string(),
    }).safeParse(body)
    if (!validated.success)
        return NextResponse.json(validated.error.issues, {status: 400})


    const newClient = await prisma.client.create({
        data: validated.data
    })
    return NextResponse.json(newClient, {status: 201})
}

export async function GET(request: NextRequest) {
    const clients = await prisma.client.findMany({
        orderBy: {name: "asc"}
    })
    return NextResponse.json(clients, {status: 200})
}