import TodoCreator from "@/app/ui/dashboard/todo-creator";

export default async function Page() {
    return (
        <main>
            <h1 className='mb-4 text-xl md:text-2xl mt-4'>Your list of todos</h1>
            <TodoCreator />
        </main>
    )
}