import TodoCreator from "@/app/ui/dashboard/todo-creator";
import { Suspense } from 'react'

export default async function Page() {
    return (
        <main>
            <h1 className='mb-4 text-xl md:text-2xl mt-4'>Your list of todos</h1>
            <Suspense>
                <TodoCreator />
            </Suspense>
        </main>
    )
}