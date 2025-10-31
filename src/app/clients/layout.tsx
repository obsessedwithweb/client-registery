import {PropsWithChildren} from "react";
import QueryClientProvider from "@/components/providers/QueryClientProvider";
import {FloatingDock} from "@/components/ui/floating-dock";
import {IconBrandGithub, IconHome, IconUser, IconUserPlus} from "@tabler/icons-react";

const ClientLayout = ({children}: PropsWithChildren) => {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "Clients",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/clients",
        },
        {
            title: "Add",
            icon: (
                <IconUserPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/clients/add",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "www.github.com/obsessedwithweb",
        },
    ];
    return <>
        <QueryClientProvider >{children}</QueryClientProvider >
        <div className="flex items-center justify-center my-10 w-full" >
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div >
    </>
}

export default ClientLayout;