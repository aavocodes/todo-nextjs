export const revalidate = 0;

import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";

async function getTodos() {

    // console.log('Starting timeout...')
    // await new Promise(resolve => setTimeout(resolve, 4000));
    // console.log('Timeout completed!')

    const data = await prisma.todo.findMany({
        where: {
            isCompleted: false,
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
    const data = await getTodos();

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