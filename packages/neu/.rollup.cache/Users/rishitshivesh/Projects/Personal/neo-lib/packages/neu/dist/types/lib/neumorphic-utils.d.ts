import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare function neumorphicVariants(base: string, variants: Record<string, Record<string, string>>, defaultVariants?: Record<string, string>): (props?: Record<string, string>) => string;
export declare const neumorphicStyles: {
    readonly raised: "neumorphic-raised";
    readonly pressed: "neumorphic-pressed";
    readonly flat: "neumorphic-flat";
    readonly card: "neumorphic-card";
    readonly button: "neumorphic-button";
    readonly input: "neumorphic-input";
};
export type NeumorphicStyle = keyof typeof neumorphicStyles;
//# sourceMappingURL=neumorphic-utils.d.ts.map