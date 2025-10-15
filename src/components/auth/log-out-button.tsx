"use client";

import { logOutAction } from "@/app/api/auth/user";
import { LogOut } from "lucide-react";

export function LogOutButton() {
    const logOut = async () =>{
        logOutAction()
    }
    
    return (
        <LogOut onClick={logOut} />
    );
}
