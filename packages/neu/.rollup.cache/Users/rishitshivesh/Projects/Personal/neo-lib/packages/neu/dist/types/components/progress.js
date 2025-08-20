"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/packages/neu/src/lib/utils";
const Progress = React.forwardRef((_a, ref) => {
    var { className, value } = _a, props = __rest(_a, ["className", "value"]);
    return (_jsx(ProgressPrimitive.Root, Object.assign({ ref: ref, className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset", "relative h-3 w-full overflow-hidden rounded-full transition-all duration-200", className) }, props, { children: _jsx(ProgressPrimitive.Indicator, { className: "h-full w-full flex-1 bg-gradient-to-r from-neumorphic-primary to-neumorphic-primary-light shadow-neumorphic-flat transition-all duration-500 ease-out", style: { transform: `translateX(-${100 - (value || 0)}%)` } }) })));
});
export { Progress };
//# sourceMappingURL=progress.js.map