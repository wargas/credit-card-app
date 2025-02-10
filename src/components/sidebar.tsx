"use client"
import { doLogout } from "@/app/(auth)/login/actions";
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LayoutDashboardIcon, LogOut, Settings2, ShoppingBag } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

type Props = {
    user?: User
}

export function AppSidebar({ user }: Props) {
    return (
        <Sidebar>
            <SidebarHeader className="bg-white">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size={'lg'}>
                            <span className="font-extrabold text-2xl">CARDS</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="bg-white">
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/dashboard'}><LayoutDashboardIcon />  Dashboard</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/cards'}><CreditCard />    Cartões</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/buy'}><ShoppingBag /> Compras</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href={'/settings'}><Settings2 /> Preferências</Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton size={'lg'}>
                                    <Avatar className="w-8 h-8 rounded-lg">
                                        <AvatarImage src="https://gravatar.com/avatar/0fc63e9f52f60ff2a949261f7e9a9207b1ab945ded8411bf1a846864402fd393" />
                                    </Avatar>
                                    <div className="grid text-sm">
                                        <span className="truncate font-semibold">{user?.name}</span>
                                        <span className="truncate text-xs">{user?.email}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" align="end" sideOffset={4} className="min-w-56 rounded-lg">
                                <DropdownMenuItem>
                                    <BadgeCheck /> Conta
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Bell /> Notificações
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => doLogout()}>
                                    <LogOut /> Sair
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}