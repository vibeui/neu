"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
import { cn } from "@/packages/neu/src/lib/utils";
function RadioGroup(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return _jsx(RadioGroupPrimitive.Root, Object.assign({ "data-slot": "radio-group", className: cn("grid gap-3", className) }, props));
}
function RadioGroupItem(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(RadioGroupPrimitive.Item, Object.assign({ "data-slot": "radio-group-item", className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset hover:shadow-neumorphic-flat data-[state=checked]:shadow-neumorphic-pressed data-[state=checked]:bg-neumorphic-primary/10 aspect-square size-5 shrink-0 rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transform hover:scale-105", className) }, props, { children: _jsx(RadioGroupPrimitive.Indicator, { "data-slot": "radio-group-indicator", className: "relative flex items-center justify-center", children: _jsx(CircleIcon, { className: "fill-neumorphic-primary text-neumorphic-primary absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 animate-in zoom-in-50 duration-200" }) }) })));
}
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=radio-group.js.map