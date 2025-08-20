"use client";
import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/packages/neu/src/lib/utils";
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(AccordionPrimitive.Item, Object.assign({ ref: ref, className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised rounded-xl mb-4 overflow-hidden", className) }, props)));
});
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx(AccordionPrimitive.Header, { className: "flex", children: _jsxs(AccordionPrimitive.Trigger, Object.assign({ ref: ref, className: cn("flex flex-1 items-center justify-between py-4 px-6 text-sm font-medium transition-all hover:shadow-neumorphic-flat active:shadow-neumorphic-pressed text-neumorphic-text hover:text-neumorphic-primary [&[data-state=open]>svg]:rotate-180", className) }, props, { children: [children, _jsx(ChevronDownIcon, { className: "size-4 shrink-0 text-neumorphic-text-secondary transition-transform duration-200" })] })) }));
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return (_jsx(AccordionPrimitive.Content, Object.assign({ ref: ref, className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, props, { children: _jsx("div", { className: cn("px-6 pb-4 pt-0 text-neumorphic-text-secondary", className), children: children }) })));
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=accordion.js.map