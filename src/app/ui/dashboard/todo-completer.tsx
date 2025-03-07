export const revalidate = 0;

import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo";

async function getCompletedTodos() {

    // console.log('Starting timeout...')
    // await new Promise(resolve => setTimeout(resolve, 4000));
    // console.log('Timeout completed!')

    const data = await prisma.todo.findMany({
        where: {
            isCompleted: true,
        },
        select: {
            title: true,
            id: true,
            isCompleted: true,
            createAt: true,
        },
        orderBy: {
            createAt: "desc",
        },
    });
    return data;
}

export default async function TodoCompleter() {
    // console.log('Starting timeout...')
    // await new Promise(resolve => setTimeout(resolve, 4000));
    // console.log('Timeout completed!')
    const completedTodos = await getCompletedTodos();

    return (
        <div className="flex-grow flex-col bg-special-800 border-t border-special-300 md:border-0 md:border-r py-4 w-full">
            <div className="flex flex-col grow bg-special-800 p-4 text-center">
                <h1 className="text-lg md:text-2xl">Completed todos</h1>

                {/* Responsive completed todos container */}
                <div className="flex flex-col items-center mt-6">
                    <div className="max-w-[400px] p-4 rounded-lg">
                        <div className="w-full space-y-4">
                            {completedTodos.map(todo => (
                                <Todo key={todo.id} todo={todo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

