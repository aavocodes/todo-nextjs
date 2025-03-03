'use client';

import { useState } from "react";
import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";

export default function Todo({ todo }: { todo: todoProps }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className='grow mx-auto flex flex-row my-1 items-center bg-special-800 border border-special-300 py-4 pl-4 rounded-2xl bg-gradient-to-r from-special-700 to-special-700'>
            {/* Hide ChangeTodo while editing */}
            {!isEditing && <ChangeTodo todo={todo} />}

            {/* Hide todo title while editing */}
            {!isEditing && (
                <span className='anitialiased uppercase break-words overflow-hidden text-ellipsis'>
                    {todo.title}
                </span>
            )}

            <div className='flex ml-auto'>
                {/* EditTodo - Controls edit mode */}
                <EditTodo todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
            </div>

            <div className='flex items-center mx-2'>
                {/* DeleteTodo (kept for layout purposes) */}
            </div>
        </div>
    )
}
