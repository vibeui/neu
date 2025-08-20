"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/packages/neu/src/lib/utils";
const Separator = React.forwardRef((_a, ref) => {
    var { className, orientation = "horizontal", decorative = true } = _a, props = __rest(_a, ["className", "orientation", "decorative"]);
    return (_jsx(SeparatorPrimitive.Root, Object.assign({ ref: ref, decorative: decorative, orientation: orientation, className: cn("shrink-0 bg-gradient-to-r from-transparent via-neumorphic-border to-transparent shadow-neumorphic-inset", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className) }, props)));
});
export { Separator };
//# sourceMappingURL=separator.js.map