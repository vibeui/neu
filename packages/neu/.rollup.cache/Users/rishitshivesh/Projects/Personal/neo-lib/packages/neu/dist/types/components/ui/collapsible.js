"use client";
import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
function Collapsible(_a) {
    var props = __rest(_a, []);
    return _jsx(CollapsiblePrimitive.Root, Object.assign({ "data-slot": "collapsible" }, props));
}
function CollapsibleTrigger(_a) {
    var props = __rest(_a, []);
    return (_jsx(CollapsiblePrimitive.CollapsibleTrigger, Object.assign({ "data-slot": "collapsible-trigger" }, props)));
}
function CollapsibleContent(_a) {
    var props = __rest(_a, []);
    return (_jsx(CollapsiblePrimitive.CollapsibleContent, Object.assign({ "data-slot": "collapsible-content" }, props)));
}
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
//# sourceMappingURL=collapsible.js.map