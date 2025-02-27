import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";

export default function Todo({ todo }: { todo: todoProps }) {
    return (
        <div className='grow mx-auto flex flex-row my-1 items-center bg-special-800 border border-special-300 py-4 pl-4 rounded-2xl bg-gradient-to-r from-special-800 to-special-600'>
            {/* ChangeTodo */}
            <ChangeTodo todo={todo} />
            <span className='anitialiased uppercase break-words overflow-hidden text-ellipsis'>{todo.title}</span>
            <div className='flex items-center mx-2'>
                {/* EditTodo */}
            </div>
            <div className='flex items-center mx-2'>
                {/* DeleteTodo */}
            </div>
        </div>
    )
}


//         <div className={`group relative grow mx-auto flex flex-row my-2 items-center p-4 
//             bg-gradient-to-r from-special-700 to-special-800 border border-special-500 
//             rounded-2xl shadow-lg transition-all duration-300 ease-in-out 
//             hover:shadow-2xl hover:border-special-400 hover:scale-105`}>

//             {/* Glowing Animated Border */}
//             <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
//                 group-hover:border-jade-400 transition-all duration-300"></div>

//             {/* ChangeTodo */}
//             <ChangeTodo todo={todo} />

//             {/* Todo Title */}
//             <span className='text-special-100 text-lg font-medium uppercase tracking-wide 
//                 break-words overflow-hidden text-ellipsis transition-all duration-300 
//                 group-hover:text-jade-300'>
//                 {todo.title}
//             </span>

//             {/* Buttons (Placeholder for Edit/Delete) */}
//             <div className='flex items-center space-x-2 ml-auto'>
//                 {/* EditTodo Placeholder */}
//                 <div className="w-8 h-8 bg-special-500 rounded-full opacity-50"></div>
//                 {/* DeleteTodo Placeholder */}
//                 <div className="w-8 h-8 bg-red-500 rounded-full opacity-50"></div>
//             </div>
//         </div>
//     )