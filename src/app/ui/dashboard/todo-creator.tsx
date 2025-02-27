import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";

async function getData() {
    const data = await prisma.todo.findMany({
        select: {
            title: true,
            id: true,
            isCompleted: true,
            createAt: true
        },
        orderBy: {
            createAt: "asc",
        },
    })
    return data
}

export default async function TodoCreator() {
    const data = await getData();

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[400px] '>
                {/* input add todo form */}
                <AddTodo />
                {/* generate todos on mobile screen */}
                <div className='mt-10'>
                    {data.map((todo, id) => (
                        // <div key={id}>{todo.title}</div>
                        <div key={id}>
                            <Todo todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}