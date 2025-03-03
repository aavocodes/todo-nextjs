'use server';

import { prisma } from '@/utils/prisma'
import { revalidatePath } from 'next/cache';


export async function createTodo(formData: FormData) {
    const input = formData.get('input') as string;
    if (!input.trim()) {
        return;
    }

    await prisma.todo.create({
        data: {
            title: input,
        },
    });

    revalidatePath('/dashboard');
}

export async function changeStatus(formData: FormData) {
    const inputId = formData.get('inputId') as string;
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId
        },
    });

    const updateStatus = !todo?.isCompleted;

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: updateStatus
        },
    });

    revalidatePath('/dashboard');
}

export async function updateTodoTitle(formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const newTitle = formData.get("newTitle") as string;

    await prisma.todo.update({
        where: {
            id: inputId
        },
        data: {
            title: newTitle
        },
    });

    revalidatePath('/dashboard')
}

export async function deleteTodo(formData: FormData) {
    const inputId = formData.get('inputId') as string;
    
    await prisma.todo.delete({
        where: {
            id: inputId
        }
    });

    revalidatePath('/dashboard')
}