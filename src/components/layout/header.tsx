import Link from "next/link";
import { Menu } from "lucide-react";
import { cookies } from 'next/headers';

import { LogOutButton } from "../auth/log-out-button";


export async function Header() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");


    return (
        <header className="sticky top-0 z-50 w-full px-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center">
                <div className="flex mr-4 w-full justify-between">
                    <span className="flex justify-center items-center">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <Menu />
                        </Link>
                    </span>
                    {token &&
                        <LogOutButton />
                    }
                </div>
            </div>
        </header>
    );
}
