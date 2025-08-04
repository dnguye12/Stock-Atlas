"use client"

import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogInIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { isLoaded, isSignedIn } = useUser()
    const { setTheme } = useTheme()

    return (
        <div className="relative bg-sidebar px-5 h-16 border-b shadow">
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="flex items-center gap-x-4">
                    <SidebarTrigger />
                    <Link href="#">
                        <img src="/logo.svg" alt="StockAtlas" className="w-auto h-7" />
                    </Link>
                </div>
                <div className="flex items-center gap-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size={"icon"} className="cursor-pointer">
                                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:hidden" />
                                <Moon className="h-[1.2rem] w-[1.2rem] hidden scale-0 rotate-90 transition-all dark:inline-block dark:scale-100 dark:rotate-0" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {
                        isLoaded
                            ?
                            isSignedIn
                                ?
                                (
                                    <UserButton
                                        appearance={{
                                            elements: {
                                                avatarBox: "!h-[36px] !w-[36px] shadow-xs z-0 !rounded-md",
                                            }
                                        }}
                                    />
                                )
                                :
                                (
                                    <Button asChild>
                                        <Link href="/sign-in"><LogInIcon /> Login</Link>
                                    </Button>
                                )
                            :
                            (
                                <Button variant={"ghost"} disabled>
                                    <LogInIcon /> Login
                                </Button>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;