"use client";

import {useQuery} from "@tanstack/react-query";
import {Client} from "@/../generated/client"
import axios from "axios";
import ClientsList from "@/components/lists/clients-list";

const ClientsPage = () => {
    const {
        data: clients,
        error,
        isFetching
    } = useClients()
    if (isFetching) return <div >Loading...</div >
    return <>
        <div className={'py-10'}>
            <ClientsList clients={clients!} />
        </div >
    </>
}

export default ClientsPage;

const useClients = () => useQuery<Client[]>({
    queryKey: ["clients"],
    queryFn: () => axios.get("/api/clients").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: false,
});