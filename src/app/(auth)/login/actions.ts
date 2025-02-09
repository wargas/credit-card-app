"use server"
import { signIn, signOut } from "@/auth";

export async function doLogin() {
    await signIn('credentials',)
}

export async function doLogout() {
    await signOut({redirectTo: '/login'})
}