export const revalidate = 0;

import prisma from "@/utils/prisma";
import Todo from "@/components/todos/Todo";
import { auth } from "@/auth";

async function getCompletedTodos(userId: string) {

    const data = await prisma.todo.findMany({
        where: {
            isCompleted: true,
            userId: userId,
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
    const session = await auth();
    if (!session?.user?.id) {
        return <div>Please log in to view your finished tasks.</div>;
    }

    const userId = session.user.id;

    const data = await getCompletedTodos(userId);

    return (
        <div className="flex-grow flex-col bg-special-800 border-t border-special-300 md:border-0 md:border-r py-4 w-full">
            <div className="flex flex-col grow bg-special-800 p-4 text-center">
                <h1 className="text-lg md:text-2xl">Completed</h1>

                {/* Responsive completed todos container */}
                <div className="flex flex-col items-center mt-6">
                    <div className="max-w-[400px] w-[368px] rounded-lg">
                        <div className="w-full space-y-4">
                            {data.map(todo => (
                                <Todo key={todo.id} todo={todo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

