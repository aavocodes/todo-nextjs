import { inputProps } from "@/types"

export default function Input({ name, type, placeholder, value }: inputProps) {
    return (
        <div className='w-full'>
            <input name={name} type={type} placeholder={placeholder} value={value}
                className='w-[300px] flex flex-row p-2 text-jade-50 placeholder-jade-100 rounded-lg 
               bg-special-700 border border-gray-600 shadow-md transition-all duration-300 
               focus:outline-none focus:ring-4 focus:ring-special-500 focus:bg-special-700
               hover:border-special-400 hover:shadow-lg'
            />
        </div>
    )
}