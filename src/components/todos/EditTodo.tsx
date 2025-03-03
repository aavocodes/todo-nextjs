'use client';

import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import Form from '../form/Form';
import Input from '../input/Input';
import Button from '../button/Button';
import { todoProps } from '@/types';
import { updateTodoTitle } from '@/app/lib/actions';

export default function EditTodo({
    todo,
    isEditing,
    setIsEditing
}: {
    todo: todoProps;
    isEditing: boolean;
    setIsEditing: (state: boolean) => void;
}) {

    const [newTitle, setNewTitle] = useState(todo.title || '');

    const handleEdit = () => {
        setNewTitle(newTitle);
        setIsEditing(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value); // Update input field as user types
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await updateTodoTitle(new FormData(e.currentTarget));
        setIsEditing(false); // Exit edit mode after saving
    };

    return (
        <div className='flex'>
            {!isEditing ? (
                <Button
                    onClick={handleEdit}
                    text={<MdEdit />}
                    actionButton
                    bgColor='bg-special-600 hover:bg-special-700'
                />
            ) : (
                <Form action={updateTodoTitle} onSubmit={handleSubmit} className='flex items-center w-full'>
                    <Input name='inputId' value={todo.id} type='hidden' />
                    <div className='flex flex-row w-[300px] max-w-[300px] gap-x-2 pt-1 mr-4'>
                        <Input name='newTitle' type='text' value={newTitle} onChange={handleChange} placeholder='Edit todo...' />
                        <Button type='submit' text='Save' bgColor='text-special-50 border border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800' />
                    </div>
                </Form>
            )}
        </div>
    );
}
