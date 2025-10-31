"use client";

import {useQuery} from "@tanstack/react-query";
import {Client} from "@/../generated/client"
import {Card, CardAction, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {useRouter} from "next/navigation";


function ClientDetail({client}: { client: Client }) {
    const router = useRouter();

    return (
        <Card >
            <CardHeader >
                <CardTitle >
                    {client!.name[0].toUpperCase() +
                        client!.name.slice(1).toLowerCase()}
                </CardTitle >
            </CardHeader >
            <CardFooter >
                <CardAction >
                    <Button variant={'destructive'} type={'button'} onClick={async () => (
                        await fetch("http://localhost:3000/api/clients/" + client!.slug, {
                            method: "DELETE",
                        }).then(() => toast.success("Client deleted"))
                            .catch(() => toast.error("Failed to delete client."))
                            .finally(() => router.push("/clients"))
                    )} >Delete</Button >
                </CardAction >
            </CardFooter >
        </Card >
    )
}


const UseClientDetails = (slug: string) => useQuery<Client>({
    queryKey: ["clients", slug],
    queryFn: () => fetch(`api/clients/${slug}`).then((res) => res.json()),
    // staleTime: 10 * 1000,
    // retry: true,
    enabled: !!slug,
});

export default ClientDetail;
