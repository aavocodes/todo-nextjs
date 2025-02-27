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

export default async function TodoCompleter() {
    const data = await getData();

    return (
        <div className="flex h-full flex-col bg-special-600 md:p-0">
            <div className="hidden md:flex grow flex-col h-20 bg-special-800 p-4 md:h-40 text-center">
                <h1 className='text-xl md:text-2xl'>Completed todos</h1>

                {/* implement mapping todos to this section when checked off */}

                {/* <div className='flex flex-col gap-5 mt-10'>
                    {data.map((todo, id) => (
                        <div key={id}>{todo.title}</div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}
