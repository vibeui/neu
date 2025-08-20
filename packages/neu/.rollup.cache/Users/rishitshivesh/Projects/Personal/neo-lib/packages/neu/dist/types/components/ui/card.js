import {__rest} from "tslib";
import {jsx as _jsx} from "react/jsx-runtime";
import {cn} from "@/packages/neu/src/lib/utils";

function Card(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({
        "data-slot": "card",
        className: cn("bg-neumorphic-bg border border-neumorphic-border shadow-neumorphic-raised rounded-2xl text-neumorphic-text flex flex-col gap-6 py-6", className)
    }, props)));
}

function CardHeader(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({
        "data-slot": "card-header",
        className: cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className)
    }, props)));
}

function CardTitle(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({
        "data-slot": "card-title",
        className: cn("leading-none font-semibold text-neumorphic-text", className)
    }, props)));
}

function CardDescription(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return _jsx("div", Object.assign({
        "data-slot": "card-description",
        className: cn("text-neumorphic-text-muted text-sm", className)
    }, props));
}

function CardAction(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({
        "data-slot": "card-action",
        className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)
    }, props)));
}

function CardContent(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return _jsx("div", Object.assign({"data-slot": "card-content", className: cn("px-6", className)}, props));
}

function CardFooter(_a) {
    var {className} = _a, props = __rest(_a, ["className"]);
    return _jsx("div", Object.assign({
        "data-slot": "card-footer",
        className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props));
}

export {Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent};
//# sourceMappingURL=card.js.map