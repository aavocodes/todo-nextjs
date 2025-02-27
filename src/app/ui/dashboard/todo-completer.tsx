import { prisma } from "@/utils/prisma";
import Todo from "@/components/todos/Todo"; // Import the Todo component to display completed todos

async function getCompletedTodos() {
    const data = await prisma.todo.findMany({
        where: {
            isCompleted: true, // Only fetch completed todos
        },
        select: {
            title: true,
            id: true,
            isCompleted: true,
            createAt: true,
        },
        orderBy: {
            createAt: "asc",
        },
    });
    return data;
}

export default async function TodoCompleter() {
    const completedTodos = await getCompletedTodos();

    return (
        <div className="flex-grow flex-col bg-special-800 border-t border-special-500 md:border-0 p-4 w-full">
            <div className="flex flex-col grow bg-special-800 p-4 text-center">
                <h1 className="text-lg md:text-2xl">Completed todos</h1>

                {/* Responsive completed todos container */}
                <div className="flex flex-col items-center mt-6">
                    <div className="w-full md:max-w-[400px] p-4 rounded-lg">
                        {/* Ensure todos take full width and are properly spaced */}
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

