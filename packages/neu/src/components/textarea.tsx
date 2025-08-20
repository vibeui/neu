import * as React from "react"

import {cn} from "@/packages/neu/src/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<"textarea">>(
    ({className, ...props}, ref) => {
        return (
            <textarea
                className={cn(
                    "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset text-neumorphic-text placeholder:text-neumorphic-text-muted",
                    "flex min-h-[80px] w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none resize-none",
                    "focus:shadow-neumorphic-focus focus:border-neumorphic-primary/50",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "selection:bg-neumorphic-primary selection:text-white",
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)

export {Textarea}
