import TodoCreator from "@/app/ui/dashboard/todo-creator";
import { Suspense } from 'react'
import { TodoCreatorSkeleton } from "@/app/ui/skeletons";

export default async function Page() {

    return (
        <main>
            <h1 className='mb-4 text-xl md:text-2xl mt-4 text-gray-900'>Current</h1>
            <Suspense fallback={<TodoCreatorSkeleton />}>
                <TodoCreator />
            </Suspense>
        </main>
    )
}