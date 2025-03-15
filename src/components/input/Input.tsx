import { inputProps } from "@/types"
import '@/app/ui/globals.css';

export default function Input({ name, type, placeholder, value, onChange, className }: inputProps) {
    return (
        <div className='w-full'>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                className={`w-full p-2 text-gray-900 placeholder-gray-500/50 rounded-lg 
                bg-special-50/50 border border-gray-200/40 shadow-md transition-all duration-300 
                focus:outline-none focus:ring-[4px] focus:ring-animated-ring focus:bg-special-50/50
                hover:border-gray-200 hover:shadow-lg ${className || ''}`}
                onChange={onChange}
            />
        </div>
    )
}