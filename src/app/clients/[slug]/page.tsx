"use server"
import {Client} from "@/../generated/client"
import ClientDetail from "@/app/clients/[slug]/client-details";
//NEXT_PUBLIC_BASE_URL=http://localhost:3000
async function ClientPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params
    const response = await fetch(`http://localhost:3000/api/clients/${slug}`, {
        method: "GET",
        cache: "force-cache"
    })
    const client: Client = await response.json();
    return <ClientDetail client={client} />
}

export default ClientPage;