import * as React from "react"
import { cn } from "@/app/lib/utils"

const FormInputs = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-lg border border-special-400/30 bg-special-200 px-3 py-2 text-sm text-white placeholder-special-50 shadow-md transition-all duration-300 focus:outline-none focus:ring-[4px] focus:ring-animated-ring focus:bg-special-300 hover:border-special-200 hover:shadow-lg",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

FormInputs.displayName = "Input";

export { FormInputs };

