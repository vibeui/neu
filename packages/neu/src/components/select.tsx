"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from "lucide-react"

import {cn} from "@/packages/neu/src/lib/utils"

function Select({...props}: React.ComponentProps<typeof SelectPrimitive.Root>) {
    return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({...props}: React.ComponentProps<typeof SelectPrimitive.Group>) {
    return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({...props}: React.ComponentProps<typeof SelectPrimitive.Value>) {
    return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised text-neumorphic-text",
            "flex h-11 w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none",
            "focus:shadow-neumorphic-focus focus:border-neumorphic-primary/50",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=open]:shadow-neumorphic-pressed",
            "[&>span]:line-clamp-1",
            className,
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDownIcon className="size-4 opacity-50"/>
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
))

function SelectContent({
                           className,
                           children,
                           position = "popper",
                           ...props
                       }: React.ComponentProps<typeof SelectPrimitive.Content>) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                className={cn(
                    "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised text-neumorphic-text",
                    "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                    className,
                )}
                position={position}
                {...props}
            >
                <SelectScrollUpButton/>
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton/>
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
}

function SelectLabel({className, ...props}: React.ComponentProps<typeof SelectPrimitive.Label>) {
    return (
        <SelectPrimitive.Label
            data-slot="select-label"
            className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
            {...props}
        />
    )
}

const SelectItem = React.forwardRef<
    React.ElementRef<typeof SelectPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, ref) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm outline-none transition-all duration-200",
            "focus:bg-neumorphic-bg focus:shadow-neumorphic-inset focus:text-neumorphic-primary",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
        )}
        {...props}
    >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="size-4"/>
      </SelectPrimitive.ItemIndicator>
    </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
))

function SelectSeparator({className, ...props}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
    return (
        <SelectPrimitive.Separator
            data-slot="select-separator"
            className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
            {...props}
        />
    )
}

function SelectScrollUpButton({className, ...props}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
    return (
        <SelectPrimitive.ScrollUpButton
            data-slot="select-scroll-up-button"
            className={cn("flex cursor-default items-center justify-center py-1", className)}
            {...props}
        >
            <ChevronUpIcon className="size-4"/>
        </SelectPrimitive.ScrollUpButton>
    )
}

function SelectScrollDownButton({
                                    className,
                                    ...props
                                }: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
    return (
        <SelectPrimitive.ScrollDownButton
            data-slot="select-scroll-down-button"
            className={cn("flex cursor-default items-center justify-center py-1", className)}
            {...props}
        >
            <ChevronDownIcon className="size-4"/>
        </SelectPrimitive.ScrollDownButton>
    )
}

export {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
}
