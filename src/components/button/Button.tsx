import { buttonProps } from "@/types";
import clsx from 'clsx'

export default function Button({ type, text, onClick, actionButton, bgColor, className }: buttonProps) {
    return (
        <div>
            <button
                onClick={onClick}
                type={type}
                className={clsx(
                    actionButton && "text-special-50 cursor-pointer transition focus:ring-4 font-medium rounded-lg text-sm px-4 py-1.5 ml-0 mr-2 my-1 focus:outline-none",
                    bgColor,
                    "text-special-50 cursor-pointer transition font-medium rounded-lg text-sm px-4 py-2.5 mb-2 focus:outline-none",
                    className
                )}
            >
                {text}
            </button>
        </div>
    )
}

