import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import slugify from "slugify";
import {ClientSchema, UpdateClientSchema} from "@/schema/client.schema";
import {z} from "zod";

export async function GET(
    request: NextRequest,
    {params}: { params: Promise<{ slug: string }> }
) {
    const {slug} = await params;
    if (!slug) {
        return NextResponse.json({error: 'Provide the client\'s slug'}, {status: 400})
    }
    const client = await prisma.client.findFirst({where: {slug}})
    if (!client) {
        return NextResponse.json(
            {error: "No client is found."}, {status: 404},
        );
    }
    return NextResponse.json(client, {status: 200});
}

export async function PATCH(request: NextRequest, {params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    if (!slug) {
        return NextResponse.json({error: 'Provide the client\'s slug'}, {status: 400})
    }
    const client = await prisma.client.findFirst({where: {slug}})
    if (!client) {
        return NextResponse.json(
            {error: "No client is found."}, {status: 404},
        );
    }

    const body = await request.json()

    const validated = UpdateClientSchema.safeParse(body)
    if (!validated.success)
        return NextResponse.json(validated.error.issues, {status: 400})


    const newClient = await prisma.client.update({
        where: {slug: client.slug},
        data: {
            ...validated.data,
        }
    })
    return NextResponse.json(newClient, {status: 201})
}

export async function DELETE(request: NextRequest, {params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    if (!slug) {
        return NextResponse.json({error: 'Provide the client\'s slug'}, {status: 400})
    }
    const client = await prisma.client.findFirst({where: {slug}})
    if (!client) {
        return NextResponse.json(
            {error: "No client is found."}, {status: 404},
        );
    }
    await prisma.client.delete({where: {slug}})
    return NextResponse.json("Client successfully deleted", {status:200})
}