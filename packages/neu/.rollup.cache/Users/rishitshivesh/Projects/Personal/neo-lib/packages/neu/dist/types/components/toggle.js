"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";
import { cn } from "@/packages/neu/src/lib/utils";
const toggleVariants = cva("inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", {
    variants: {
        variant: {
            default: "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised hover:shadow-neumorphic-flat data-[state=on]:shadow-neumorphic-pressed text-neumorphic-text hover:text-neumorphic-primary data-[state=on]:text-neumorphic-primary transform hover:scale-[1.02] active:scale-[0.98]",
            outline: "border border-neumorphic-border bg-transparent shadow-neumorphic-flat hover:shadow-neumorphic-raised hover:bg-neumorphic-bg/50 data-[state=on]:bg-neumorphic-bg data-[state=on]:shadow-neumorphic-pressed text-neumorphic-text",
        },
        size: {
            default: "h-10 px-3 min-w-10",
            sm: "h-9 px-2.5 min-w-9",
            lg: "h-11 px-5 min-w-11",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Toggle = React.forwardRef((_a, ref) => {
    var { className, variant, size } = _a, props = __rest(_a, ["className", "variant", "size"]);
    return (_jsx(TogglePrimitive.Root, Object.assign({ ref: ref, className: cn(toggleVariants({ variant, size, className })) }, props)));
});
Toggle.displayName = TogglePrimitive.Root.displayName;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.js.map