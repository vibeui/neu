import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/packages/neu/src/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none", {
    variants: {
        variant: {
            default: "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed text-neumorphic-text hover:text-neumorphic-primary active:text-neumorphic-primary transform hover:scale-[1.02] active:scale-[0.98]",
            primary: "bg-gradient-to-r from-neumorphic-primary to-neumorphic-primary-light shadow-neumorphic-accent-raised hover:shadow-neumorphic-accent-pressed text-white border border-neumorphic-primary/20 hover:from-neumorphic-primary-light hover:to-neumorphic-primary transform hover:scale-[1.02] active:scale-[0.98]",
            secondary: "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed text-neumorphic-text-secondary hover:text-neumorphic-text hover:bg-neumorphic-bg/80 transform hover:scale-[1.02] active:scale-[0.98]",
            outline: "bg-transparent border-2 border-neumorphic-border shadow-neumorphic-flat hover:shadow-neumorphic-raised hover:bg-neumorphic-bg/50 text-neumorphic-text hover:border-neumorphic-primary/30 transform hover:scale-[1.02] active:scale-[0.98]",
            ghost: "bg-transparent text-neumorphic-text hover:bg-neumorphic-bg hover:shadow-neumorphic-flat hover:text-neumorphic-primary transform hover:scale-[1.02] active:scale-[0.98]",
            destructive: "bg-gradient-to-r from-red-500 to-red-600 shadow-neumorphic-accent-raised hover:shadow-neumorphic-accent-pressed text-white border border-red-500/20 hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] active:scale-[0.98]",
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
});
function Button(_a) {
    var { className, variant, size, asChild = false } = _a, props = __rest(_a, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? Slot : "button";
    return _jsx(Comp, Object.assign({ "data-slot": "button", className: cn(buttonVariants({ variant, size }), className) }, props));
}
export { Button, buttonVariants };
//# sourceMappingURL=button.js.map