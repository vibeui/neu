import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "@/packages/neu/src/lib/utils";
function Skeleton(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx("div", Object.assign({ "data-slot": "skeleton", className: cn("bg-accent animate-pulse rounded-md", className) }, props)));
}
export { Skeleton };
//# sourceMappingURL=skeleton.js.map