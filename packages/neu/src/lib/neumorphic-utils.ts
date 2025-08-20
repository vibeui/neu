import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function neumorphicVariants(
  base: string,
  variants: Record<string, Record<string, string>>,
  defaultVariants?: Record<string, string>,
) {
  return (props?: Record<string, string>) => {
    const classes = [base]

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (variants[key] && variants[key][value]) {
          classes.push(variants[key][value])
        }
      })
    }

    if (defaultVariants) {
      Object.entries(defaultVariants).forEach(([key, value]) => {
        if (!props?.[key] && variants[key] && variants[key][value]) {
          classes.push(variants[key][value])
        }
      })
    }

    return cn(...classes)
  }
}

export const neumorphicStyles = {
  raised: "neumorphic-raised",
  pressed: "neumorphic-pressed",
  flat: "neumorphic-flat",
  card: "neumorphic-card",
  button: "neumorphic-button",
  input: "neumorphic-input",
} as const

export type NeumorphicStyle = keyof typeof neumorphicStyles
