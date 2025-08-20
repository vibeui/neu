"use client";
import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/packages/neu/src/lib/utils";
function ScrollArea(_a) {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(ScrollAreaPrimitive.Root, Object.assign({ "data-slot": "scroll-area", className: cn("relative", className) }, props, { children: [_jsx(ScrollAreaPrimitive.Viewport, { "data-slot": "scroll-area-viewport", className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1", children: children }), _jsx(ScrollBar, {}), _jsx(ScrollAreaPrimitive.Corner, {})] })));
}
function ScrollBar(_a) {
    var { className, orientation = "vertical" } = _a, props = __rest(_a, ["className", "orientation"]);
    return (_jsx(ScrollAreaPrimitive.ScrollAreaScrollbar, Object.assign({ "data-slot": "scroll-area-scrollbar", orientation: orientation, className: cn("flex touch-none p-px transition-colors select-none", orientation === "vertical" &&
            "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" &&
            "h-2.5 flex-col border-t border-t-transparent", className) }, props, { children: _jsx(ScrollAreaPrimitive.ScrollAreaThumb, { "data-slot": "scroll-area-thumb", className: "bg-border relative flex-1 rounded-full" }) })));
}
export { ScrollArea, ScrollBar };
//# sourceMappingURL=scroll-area.js.map