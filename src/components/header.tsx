"use client"

import { User } from "next-auth"
import Link from "next/link"

type Props = {
    user?: User
}

export function Header({ user }: Props) {
    return <div className="absolute shadow px-4 items-center top-0 right-0 left-0 h-16 bg-background flex">
        <Link href={'/dashboard'}>CARDS</Link>
    </div>
}