export const revalidate = 0;

import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import prisma from "@/utils/prisma";
import { auth } from "@/auth";

async function getTodos(userId: string) {

    const data = await prisma.todo.findMany({
        where: {
            isCompleted: false,
            userId: userId,
        },
        select: {
            title: true,
            id: true,
            isCompleted: true,
            createAt: true
        },
        orderBy: {
            createAt: "desc",
        },
    })
    return data;
}

export default async function TodoCreator() {
    const session = await auth();
    if (!session?.user?.id) {
        return <div>Please log in to view your current tasks.</div>
    }

    const userId = session.user.id;

    const data = await getTodos(userId);

    return (
        <div className='flex flex-col justify-center items-center w-full]'>
            <div className='max-w-[400px] w-[368px] py-6'>
                <AddTodo />
                <div className='w-full mt-10 space-y-4'>
                    {data.map((todo, id) => (
                        <div key={id}>
                            <Todo todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}