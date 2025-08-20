"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/packages/neu/src/lib/utils";
function HoverCard(_a) {
    var props = __rest(_a, []);
    return _jsx(HoverCardPrimitive.Root, Object.assign({ "data-slot": "hover-card" }, props));
}
function HoverCardTrigger(_a) {
    var props = __rest(_a, []);
    return (_jsx(HoverCardPrimitive.Trigger, Object.assign({ "data-slot": "hover-card-trigger" }, props)));
}
function HoverCardContent(_a) {
    var { className, align = "center", sideOffset = 4 } = _a, props = __rest(_a, ["className", "align", "sideOffset"]);
    return (_jsx(HoverCardPrimitive.Portal, { "data-slot": "hover-card-portal", children: _jsx(HoverCardPrimitive.Content, Object.assign({ "data-slot": "hover-card-content", align: align, sideOffset: sideOffset, className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className) }, props)) }));
}
export { HoverCard, HoverCardTrigger, HoverCardContent };
//# sourceMappingURL=hover-card.js.map