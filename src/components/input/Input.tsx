import { inputProps } from "@/types"
import '@/app/ui/globals.css';

export default function Input({ name, type, placeholder, value, onChange }: inputProps) {
    return (
        <div className='w-full'>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                className="w-full p-2 text-jade-50 placeholder-special-100 rounded-lg 
                bg-special-500 border border-gray-900 shadow-md transition-all duration-300 
                focus:outline-none focus:ring-[4px] focus:ring-animated-ring focus:bg-special-700
                hover:border-special-400 hover:shadow-lg"
                onChange={onChange}
            />
        </div>
    )
}