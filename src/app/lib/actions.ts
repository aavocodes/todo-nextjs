'use server';

import { signIn, signOut } from '@/auth';
import { signUpSchema } from '@/app/lib/zod'
import { AuthError } from 'next-auth'
import bcryptjs from 'bcryptjs'
import prisma from '@/utils/prisma'
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function createTodo(formData: FormData) {
    const input = formData.get('input') as string;
    if (!input.trim()) {
        return;
    }

    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User is not authenticated");
    }

    await prisma.todo.create({
        data: {
            title: input,
            userId: session.user.id,
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

export async function handleCredentialsSignin({ email, password }: {
    email: string,
    password: string
}) {
    try {
        await signIn("credentials", { email, password, redirectTo: "https://todo-nextjs-blond.vercel.app/dashboard" });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        message: 'Invalid credentials',
                    }
                default:
                    return {
                        message: 'Something went wrong.',
                    }
            }
        }
        throw error;
    }
}

export async function handleGithubSignin() {
    await signIn("github", { redirectTo: "/" });
}

export async function handleSignOut() {
    await signOut();
}

export async function handleSignUp({ name, email, password, confirmPassword }: {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}) {
    try {
        const parsedCredentials = signUpSchema.safeParse({ name, email, password, confirmPassword });
        if (!parsedCredentials.success) {
            return { success: false, message: "Invalid data." };
        }

        // check if the email is already taken
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return { success: false, message: "Email already exists. Login to continue." };
        }

        // hash the password
        const hashedPassword = await bcryptjs.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return { success: true, message: "Account created successfully." };
    } catch (error) {
        console.error("Error creating account:", error);
        return { success: false, message: "An unexpected error occurred. Please try again." };
    }
}