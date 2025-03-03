import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";

async function getData() {
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
    return data
}

export default async function TodoCreator() {
    const data = await getData();

    return (
        <div className='flex flex-col justify-center items-center w-full]'>
            <div className='max-w-[400px] w-[368px] py-6'>
                {/* input add todo form */}
                <AddTodo />
                {/* generate todos on mobile screen */}
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