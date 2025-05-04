import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { IconCaretDown } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {
    p_width?: string;
}

export default function Navbar({ p_width }: NavbarProps ) {
    return (
        <div className={cn("z-99 border-b w-full border-neutral-200 sticky top-0 border-dashed text-black bg-white/30 backdrop-blur-md", p_width == "narrow" ? "px-10" : "px-10 2xl:px-[10vw]")}>
            <div className="px-7 border-l border-r border-dashed p-4 border-neutral-200 h-full">
                <div className="flex justify-between w-full">
                    <Link href="/">
                        <div className="flex gap-2 items-center">
                            <Image
                                className=""
                                src="/logo_no_name.png"
                                alt="Next.js logo"
                                width={25}
                                height={10}
                                priority
                            />
                            <p>Docarite</p>
                        </div>
                    </Link>
                    <div className="flex gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="dropdown">Tools  <IconCaretDown/> </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-78 z-[999]">
                                <DropdownMenuItem>
                                    <Link href="/readme-generator">
                                        <div className="flex flex-col p-2">
                                            <p className="font-semibold">README Generator</p>
                                            <p className="pl-2">Automatically generate an intrusive Readme.md file for your Git Repository</p>
                                        </div>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex flex-col p-2">
                                        <p className="font-semibold">AI Code Documentation</p>
                                        <p className="pl-2">Automatic technical documentation from your source code</p>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex flex-col p-2">
                                        <p className="font-semibold">API Documentation</p>
                                        <p className="pl-2">Automatically generate Swagger-compliant JSON documentation</p>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline" className="border-neutral-200">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
