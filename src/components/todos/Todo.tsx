'use client';

import { useState } from "react";
import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

export default function Todo({ todo }: { todo: todoProps }) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className='grow mx-auto flex flex-row my-1 items-center bg-special-50/50 border border-gray-200/40 py-4 pl-4 rounded-2xl text-gray-900 backdrop-blur-md shadow-md'>
            {/* Hide ChangeTodo while editing */}
            {!isEditing && <ChangeTodo todo={todo} />}

            {/* Hide todo title while editing */}
            {!isEditing && (
                <span className={`anitialiased uppercase break-words overflow-hidden text-ellipsis mx-1 ${todo.isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {todo.title}
                </span>
            )}

            <div className='flex ml-auto mr-1'>
                <div>
                    <EditTodo key={todo.id} todo={todo} isEditing={isEditing} setIsEditing={setIsEditing} />
                </div>
                <div>
                    {!isEditing && <DeleteTodo todo={todo} />}
                </div>
            </div>
        </div>
    )
}
