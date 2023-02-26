export type TailwindBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl" 
export type TailwindModifier = "hover"
export type TailwindThemeModifier = "dark"

export type ClassesObj = {
    [K in TailwindBreakpoint | TailwindModifier | TailwindThemeModifier]?: Array<string>;
};