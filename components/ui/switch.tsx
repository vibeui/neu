"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
            "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-neumorphic-border bg-neumorphic-bg shadow-neumorphic-inset transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-neumorphic-primary data-[state=checked]:shadow-neumorphic-flat",
            className,
        )}
        {...props}
        ref={ref}
    >
      <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
              "pointer-events-none block size-5 rounded-full bg-white shadow-neumorphic-raised ring-0 transition-transform duration-300 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1",
          )}
      />
    </SwitchPrimitive.Root>
))

export { Switch }
