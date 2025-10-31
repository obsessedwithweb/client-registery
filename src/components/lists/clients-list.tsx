'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// Assuming you have Avatar components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardHeading,
    CardTitle,
    CardToolbar,
} from '@/components/ui/reui/card';
import { Settings } from 'lucide-react';
import {Client} from "@/../generated/client";
import {JSX} from "react";

interface Props {
    clients: Client[];
}

export default function ClientsList({clients}: Props): JSX.Element {return (
        <Card className="w-[400px] mx-auto" variant="accent">
            <CardHeader>
                <CardHeading>
                    <CardTitle>Clients List</CardTitle>
                </CardHeading>
                <CardToolbar>
                    <Button role="icon" variant="outline" size="sm">
                        <Settings />
                    </Button>
                </CardToolbar>
            </CardHeader>
            <CardContent className="py-1">
                {clients.map((client) => {
                    return (
                        <div
                            key={client.id}
                            className="flex items-center justify-between gap-2 py-2 border-b border-dashed last:border-none"
                        >
                            {/* Left: Avatar and User Info */}
                            <div className="flex items-center gap-3">
                                <Avatar className="size-8">
                                    <AvatarImage src={`/media/avatars/${client.image}`} alt={client.name} />
                                    <AvatarFallback>SA</AvatarFallback>
                                </Avatar>
                                <div>
                                    <Link href={`/clients/${client.slug}`} className="text-sm font-medium text-foreground hover:text-primary">
                                        {client.name}
                                    </Link>
                                    <div className="text-sm font-normal text-muted-foreground">{client.email}</div>
                                </div>
                            </div>
                            <Badge variant={'secondary'}>
                                {client.type.charAt(0).toUpperCase() + client.type.slice(1).toLowerCase()}
                            </Badge>
                        </div>
                    );
                })}
            </CardContent>
            <CardFooter className="justify-center">
                <Button role="link" unselectable={"on"}>
                    {clients.length} clients so far 🔥🔥
                </Button>
            </CardFooter>
        </Card>
    );
}
