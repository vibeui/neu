import type * as React from "react"

import {cn} from "@/packages/neu/src/lib/utils"

function Input({className, type, ...props}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset text-neumorphic-text placeholder:text-neumorphic-text-muted",
                "flex h-11 w-full min-w-0 rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none",
                "focus:shadow-neumorphic-focus focus:border-neumorphic-primary/50",
                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neumorphic-text",
                "selection:bg-neumorphic-primary selection:text-white",
                className,
            )}
            {...props}
        />
    )
}

export {Input}
