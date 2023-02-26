import { ClassesObj, TailwindBreakpoint } from "../tailwind.types";

//MINCHIA L'HO SCRITTA ILLEGIBILE
export const mergeClasses = (classes: Array<string>, breakpoint: TailwindBreakpoint) => classes?.reduce((prevClass, currClass, idx) => (prevClass += `${breakpoint}:${currClass}${idx === classes.length - 1 ? "" : " "}`), "");

export const setStyles = (classesObj: ClassesObj) => {
    const breakpoints = Object.keys(classesObj) as Array<TailwindBreakpoint>;

    return breakpoints.map((breakpoint) => mergeClasses(classesObj[breakpoint]!, breakpoint)).join(" ");
};
