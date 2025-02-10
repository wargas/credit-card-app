"use client"

import { User } from "next-auth"
import { Separator } from "./ui/separator"
import { SidebarTrigger } from "./ui/sidebar"

type Props = {
    user?: User,
    breadcrumb: React.ReactNode
}

export function Header({ user, breadcrumb  }: Props) {
    return <div className="absolute px-4 items-center gap-4 top-0 right-0 left-0 h-14 bg-background flex">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-6" />
        {breadcrumb}
    </div>
}