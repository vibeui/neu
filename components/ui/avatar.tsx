"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised",
            "relative flex size-10 shrink-0 overflow-hidden rounded-full transition-all duration-200",
            className,
        )}
        {...props}
    />
))

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
      <AvatarPrimitive.Image data-slot="avatar-image" className={cn("aspect-square size-full", className)} {...props} />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
      <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn("bg-muted flex size-full items-center justify-center rounded-full", className)}
          {...props}
      />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
