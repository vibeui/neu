"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/packages/neu/src/lib/utils";
const Checkbox = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(CheckboxPrimitive.Root, Object.assign({ ref: ref, className: cn("peer size-5 shrink-0 rounded-lg border border-neumorphic-border bg-neumorphic-bg shadow-neumorphic-inset", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=checked]:bg-neumorphic-primary data-[state=checked]:shadow-neumorphic-pressed data-[state=checked]:border-neumorphic-primary", "transition-all duration-200", className) }, props, { children: _jsx(CheckboxPrimitive.Indicator, { className: cn("flex items-center justify-center text-white"), children: _jsx(Check, { className: "size-3.5" }) }) })));
});
export { Checkbox };
//# sourceMappingURL=checkbox.js.map