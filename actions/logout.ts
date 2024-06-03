"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    //some server task ; If u want to perform any action before logout
    await signOut();
}