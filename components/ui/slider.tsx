"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, defaultValue, value, min = 0, max = 100, ...props }, ref) => {
  const _values = React.useMemo(
      () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
      [value, defaultValue, min, max],
  )

  return (
      <SliderPrimitive.Root
          ref={ref}
          data-slot="slider"
          defaultValue={defaultValue}
          value={value}
          min={min}
          max={max}
          className={cn("relative flex w-full touch-none select-none items-center", className)}
          {...props}
      >
        <SliderPrimitive.Track className="bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset relative h-3 w-full grow overflow-hidden rounded-full transition-all duration-200">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-neumorphic-primary to-neumorphic-primary-light shadow-neumorphic-flat" />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
                data-slot="slider-thumb"
                key={index}
                className="bg-white border-2 border-neumorphic-primary shadow-neumorphic-raised block size-6 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50 disabled:pointer-events-none disabled:opacity-50 hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed"
            />
        ))}
      </SliderPrimitive.Root>
  )
})

export { Slider }
