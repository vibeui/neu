"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/packages/neu/src/lib/utils";
import { toggleVariants } from "@/packages/neu/src/components/toggle";
const ToggleGroupContext = React.createContext({
    size: "default",
    variant: "default",
});
function ToggleGroup(_a) {
    var { className, variant, size, children } = _a, props = __rest(_a, ["className", "variant", "size", "children"]);
    return (_jsx(ToggleGroupPrimitive.Root, Object.assign({ "data-slot": "toggle-group", "data-variant": variant, "data-size": size, className: cn("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className) }, props, { children: _jsx(ToggleGroupContext.Provider, { value: { variant, size }, children: children }) })));
}
function ToggleGroupItem(_a) {
    var { className, children, variant, size } = _a, props = __rest(_a, ["className", "children", "variant", "size"]);
    const context = React.useContext(ToggleGroupContext);
    return (_jsx(ToggleGroupPrimitive.Item, Object.assign({ "data-slot": "toggle-group-item", "data-variant": context.variant || variant, "data-size": context.size || size, className: cn(toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
        }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className) }, props, { children: children })));
}
export { ToggleGroup, ToggleGroupItem };
//# sourceMappingURL=toggle-group.js.map