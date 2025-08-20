import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function neumorphicVariants(base, variants, defaultVariants) {
    return (props) => {
        const classes = [base];
        if (props) {
            Object.entries(props).forEach(([key, value]) => {
                if (variants[key] && variants[key][value]) {
                    classes.push(variants[key][value]);
                }
            });
        }
        if (defaultVariants) {
            Object.entries(defaultVariants).forEach(([key, value]) => {
                if (!(props === null || props === void 0 ? void 0 : props[key]) && variants[key] && variants[key][value]) {
                    classes.push(variants[key][value]);
                }
            });
        }
        return cn(...classes);
    };
}
export const neumorphicStyles = {
    raised: "neumorphic-raised",
    pressed: "neumorphic-pressed",
    flat: "neumorphic-flat",
    card: "neumorphic-card",
    button: "neumorphic-button",
    input: "neumorphic-input",
};
//# sourceMappingURL=neumorphic-utils.js.map