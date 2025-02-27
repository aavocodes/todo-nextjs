import { buttonProps } from "@/types";
import clsx from 'clsx'

export default function Button({ type, text, onClick, actionButton, bgColor }: buttonProps) {
    return (
        <div>
            <button onClick={onClick} type={type} className={clsx(
                actionButton && 'text-special-50 cursor-pointer transition hover:bg-jade-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 my-1 focus:outline-none',
                `${bgColor} hover:bg-special-700 text-special-50 cursor-pointer transition font-medium rounded-lg text-sm px-6 py-2.5 mx-2 mb-2 focus:outline-none`
            )}>
                {text}
            </button>
        </div>
    )
}
