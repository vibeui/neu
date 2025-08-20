"use client";
import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { cn } from "@/packages/neu/src/lib/utils";
function Select(_a) {
    var props = __rest(_a, []);
    return _jsx(SelectPrimitive.Root, Object.assign({ "data-slot": "select" }, props));
}
function SelectGroup(_a) {
    var props = __rest(_a, []);
    return _jsx(SelectPrimitive.Group, Object.assign({ "data-slot": "select-group" }, props));
}
function SelectValue(_a) {
    var props = __rest(_a, []);
    return _jsx(SelectPrimitive.Value, Object.assign({ "data-slot": "select-value" }, props));
}
const SelectTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Trigger, Object.assign({ ref: ref, className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised text-neumorphic-text", "flex h-11 w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none", "focus:shadow-neumorphic-focus focus:border-neumorphic-primary/50", "disabled:cursor-not-allowed disabled:opacity-50", "data-[state=open]:shadow-neumorphic-pressed", "[&>span]:line-clamp-1", className) }, props, { children: [children, _jsx(SelectPrimitive.Icon, { asChild: true, children: _jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })] })));
});
function SelectContent(_a) {
    var { className, children, position = "popper" } = _a, props = __rest(_a, ["className", "children", "position"]);
    return (_jsx(SelectPrimitive.Portal, { children: _jsxs(SelectPrimitive.Content, Object.assign({ className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised text-neumorphic-text", "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position }, props, { children: [_jsx(SelectScrollUpButton, {}), _jsx(SelectPrimitive.Viewport, { className: cn("p-1", position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), _jsx(SelectScrollDownButton, {})] })) }));
}
function SelectLabel(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Label, Object.assign({ "data-slot": "select-label", className: cn("text-muted-foreground px-2 py-1.5 text-xs", className) }, props)));
}
const SelectItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(SelectPrimitive.Item, Object.assign({ ref: ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm outline-none transition-all duration-200", "focus:bg-neumorphic-bg focus:shadow-neumorphic-inset focus:text-neumorphic-primary", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className) }, props, { children: [_jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(SelectPrimitive.ItemIndicator, { children: _jsx(CheckIcon, { className: "size-4" }) }) }), _jsx(SelectPrimitive.ItemText, { children: children })] })));
});
function SelectSeparator(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.Separator, Object.assign({ "data-slot": "select-separator", className: cn("bg-border pointer-events-none -mx-1 my-1 h-px", className) }, props)));
}
function SelectScrollUpButton(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.ScrollUpButton, Object.assign({ "data-slot": "select-scroll-up-button", className: cn("flex cursor-default items-center justify-center py-1", className) }, props, { children: _jsx(ChevronUpIcon, { className: "size-4" }) })));
}
function SelectScrollDownButton(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(SelectPrimitive.ScrollDownButton, Object.assign({ "data-slot": "select-scroll-down-button", className: cn("flex cursor-default items-center justify-center py-1", className) }, props, { children: _jsx(ChevronDownIcon, { className: "size-4" }) })));
}
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, };
//# sourceMappingURL=select.js.map