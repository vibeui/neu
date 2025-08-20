import {__rest} from "tslib";
import {jsx as _jsx} from "react/jsx-runtime";
import {cn} from "@/packages/neu/src/lib/utils";

function Input(_a) {
    var {className, type} = _a, props = __rest(_a, ["className", "type"]);
    return (_jsx("input", Object.assign({
        type: type,
        "data-slot": "input",
        className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-inset text-neumorphic-text placeholder:text-neumorphic-text-muted", "flex h-11 w-full min-w-0 rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none", "focus:shadow-neumorphic-focus focus:border-neumorphic-primary/50", "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50", "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neumorphic-text", "selection:bg-neumorphic-primary selection:text-white", className)
    }, props)));
}

export {Input};
//# sourceMappingURL=input.js.map