"use client";
import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/packages/neu/src/lib/utils";
const Slider = React.forwardRef((_a, ref) => {
    var { className, defaultValue, value, min = 0, max = 100 } = _a, props = __rest(_a, ["className", "defaultValue", "value", "min", "max"]);
    const _values = React.useMemo(() => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]), [value, defaultValue, min, max]);
    return (_jsxs(SliderPrimitive.Root, Object.assign({ ref: ref, "data-slot": "slider", defaultValue: defaultValue, value: value, min: min, max: max, className: cn("relative flex w-full touch-none select-none items-center", className) }, props, { children: [_jsx(SliderPrimitive.Track, { className: "bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset relative h-3 w-full grow overflow-hidden rounded-full transition-all duration-200", children: _jsx(SliderPrimitive.Range, { className: "absolute h-full bg-gradient-to-r from-neumorphic-primary to-neumorphic-primary-light shadow-neumorphic-flat" }) }), Array.from({ length: _values.length }, (_, index) => (_jsx(SliderPrimitive.Thumb, { "data-slot": "slider-thumb", className: "bg-white border-2 border-neumorphic-primary shadow-neumorphic-raised block size-6 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neumorphic-primary/50 disabled:pointer-events-none disabled:opacity-50 hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed" }, index)))] })));
});
export { Slider };
//# sourceMappingURL=slider.js.map