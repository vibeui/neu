"use client";
import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "@/packages/neu/src/lib/utils";
function ContextMenu(_a) {
    var props = __rest(_a, []);
    return _jsx(ContextMenuPrimitive.Root, Object.assign({ "data-slot": "context-menu" }, props));
}
function ContextMenuTrigger(_a) {
    var props = __rest(_a, []);
    return (_jsx(ContextMenuPrimitive.Trigger, Object.assign({ "data-slot": "context-menu-trigger" }, props)));
}
function ContextMenuGroup(_a) {
    var props = __rest(_a, []);
    return (_jsx(ContextMenuPrimitive.Group, Object.assign({ "data-slot": "context-menu-group" }, props)));
}
function ContextMenuPortal(_a) {
    var props = __rest(_a, []);
    return (_jsx(ContextMenuPrimitive.Portal, Object.assign({ "data-slot": "context-menu-portal" }, props)));
}
function ContextMenuSub(_a) {
    var props = __rest(_a, []);
    return _jsx(ContextMenuPrimitive.Sub, Object.assign({ "data-slot": "context-menu-sub" }, props));
}
function ContextMenuRadioGroup(_a) {
    var props = __rest(_a, []);
    return (_jsx(ContextMenuPrimitive.RadioGroup, Object.assign({ "data-slot": "context-menu-radio-group" }, props)));
}
function ContextMenuSubTrigger(_a) {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return (_jsxs(ContextMenuPrimitive.SubTrigger, Object.assign({ "data-slot": "context-menu-sub-trigger", "data-inset": inset, className: cn("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props, { children: [children, _jsx(ChevronRightIcon, { className: "ml-auto" })] })));
}
function ContextMenuSubContent(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ContextMenuPrimitive.SubContent, Object.assign({ "data-slot": "context-menu-sub-content", className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className) }, props)));
}
function ContextMenuContent(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ContextMenuPrimitive.Portal, { children: _jsx(ContextMenuPrimitive.Content, Object.assign({ "data-slot": "context-menu-content", className: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className) }, props)) }));
}
function ContextMenuItem(_a) {
    var { className, inset, variant = "default" } = _a, props = __rest(_a, ["className", "inset", "variant"]);
    return (_jsx(ContextMenuPrimitive.Item, Object.assign({ "data-slot": "context-menu-item", "data-inset": inset, "data-variant": variant, className: cn("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props)));
}
function ContextMenuCheckboxItem(_a) {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return (_jsxs(ContextMenuPrimitive.CheckboxItem, Object.assign({ "data-slot": "context-menu-checkbox-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked }, props, { children: [_jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(ContextMenuPrimitive.ItemIndicator, { children: _jsx(CheckIcon, { className: "size-4" }) }) }), children] })));
}
function ContextMenuRadioItem(_a) {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsxs(ContextMenuPrimitive.RadioItem, Object.assign({ "data-slot": "context-menu-radio-item", className: cn("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props, { children: [_jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: _jsx(ContextMenuPrimitive.ItemIndicator, { children: _jsx(CircleIcon, { className: "size-2 fill-current" }) }) }), children] })));
}
function ContextMenuLabel(_a) {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return (_jsx(ContextMenuPrimitive.Label, Object.assign({ "data-slot": "context-menu-label", "data-inset": inset, className: cn("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className) }, props)));
}
function ContextMenuSeparator(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(ContextMenuPrimitive.Separator, Object.assign({ "data-slot": "context-menu-separator", className: cn("bg-border -mx-1 my-1 h-px", className) }, props)));
}
function ContextMenuShortcut(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("span", Object.assign({ "data-slot": "context-menu-shortcut", className: cn("text-muted-foreground ml-auto text-xs tracking-widest", className) }, props)));
}
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };
//# sourceMappingURL=context-menu.js.map