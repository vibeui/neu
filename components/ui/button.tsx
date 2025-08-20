import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed text-neumorphic-text hover:text-neumorphic-primary active:text-neumorphic-primary",
        primary:
          "bg-gradient-to-r from-neumorphic-primary to-neumorphic-primary-light shadow-neumorphic-accent-raised hover:shadow-neumorphic-accent-pressed text-white border border-neumorphic-primary/20",
        secondary:
          "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed text-neumorphic-text-secondary hover:text-neumorphic-text",
        outline:
          "bg-transparent border-2 border-neumorphic-border shadow-neumorphic-flat hover:shadow-neumorphic-raised hover:bg-neumorphic-bg/50 text-neumorphic-text",
        ghost:
          "bg-transparent text-neumorphic-text hover:bg-neumorphic-bg hover:shadow-neumorphic-flat hover:text-neumorphic-primary",
        pressed: "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-pressed text-neumorphic-text",
      },
      size: {
        default: "h-11 px-6 py-3 rounded-xl",
        sm: "h-9 px-4 py-2 rounded-lg text-xs",
        lg: "h-14 px-8 py-4 rounded-2xl text-base",
        icon: "size-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, buttonVariants }
