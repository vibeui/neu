import {__rest} from "tslib";
import {jsx as _jsx} from "react/jsx-runtime";
import * as React from "react";
import {cva} from "class-variance-authority";
import {cn} from "@/packages/neu/src/lib/utils";

const alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const Alert = React.forwardRef((_a, ref) => {
    var {className, variant} = _a, props = __rest(_a, ["className", "variant"]);
    return (_jsx("div", Object.assign({
        ref: ref,
        role: "alert",
        className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised text-neumorphic-text", "relative w-full rounded-xl p-4 transition-all duration-200", alertVariants({variant}), className)
    }, props)));
});

function AlertTitle(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({
        "data-slot": "alert-title",
        className: cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)
    }, props)));
}

function AlertDescription(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({
        "data-slot": "alert-description",
        className: cn("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className)
    }, props)));
}

export {Alert, AlertTitle, AlertDescription};
//# sourceMappingURL=alert.js.map