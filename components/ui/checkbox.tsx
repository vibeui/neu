"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "peer size-5 shrink-0 rounded-lg border border-neumorphic-border bg-neumorphic-bg shadow-neumorphic-inset",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-neumorphic-primary data-[state=checked]:shadow-neumorphic-pressed data-[state=checked]:border-neumorphic-primary",
            "transition-all duration-200",
            className,
        )}
        {...props}
    >
      <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-white")}>
        <Check className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))

export { Checkbox }
