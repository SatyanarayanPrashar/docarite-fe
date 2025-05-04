import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

interface MainWrapperProps {
    children: ReactNode;
    p_width?: string;
}

export default function Main_wrapper({ children, p_width }: MainWrapperProps) {
    return (
        <div className="flex flex-col items-center h-[91vh]">
            <Navbar p_width={p_width}/>
            <div className={cn("w-full h-full", p_width == "narrow" ? "px-10" : "px-10 2xl:px-[10vw]")}>
                <div className="border-l border-r border-dashed border-neutral-200">
                    {children}
                </div>
            </div>
        </div>
    );
}
