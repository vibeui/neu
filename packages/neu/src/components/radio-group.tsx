"use client"

import type * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import {CircleIcon} from "lucide-react"

import {cn} from "@/packages/neu/src/lib/utils"

function RadioGroup({className, ...props}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
    return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn("grid gap-3", className)} {...props} />
}

function RadioGroupItem({className, ...props}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
    return (
        <RadioGroupPrimitive.Item
            data-slot="radio-group-item"
            className={cn(
                "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset hover:shadow-neumorphic-flat data-[state=checked]:shadow-neumorphic-pressed data-[state=checked]:bg-neumorphic-primary/10 aspect-square size-5 shrink-0 rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transform hover:scale-105",
                className,
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator
                data-slot="radio-group-indicator"
                className="relative flex items-center justify-center"
            >
                <CircleIcon
                    className="fill-neumorphic-primary text-neumorphic-primary absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-in zoom-in-50 duration-200"/>
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    )
}

export {RadioGroup, RadioGroupItem}
