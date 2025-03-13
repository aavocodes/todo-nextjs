import TodoCompleter from '@/app/ui/dashboard/todo-completer'
import { roboto } from '../ui/font';
import { Suspense } from 'react';
import { TodoCompleterSkeleton } from '../ui/skeletons';

export const experimental_ppr = true;

export default async function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className={`${roboto.className}`}>
            <div className="pt-16 w-full flex h-screen flex-col md:flex-row md:overflow-y-auto md:px-0 bg-special-800">
                <div className="w-full flex-col flex md:w-[50%] md:overflow-y-auto order-last md:order-first bg-special-800">
                    <Suspense fallback={<TodoCompleterSkeleton />}>
                        <TodoCompleter />
                    </Suspense>
                </div>
                <div className="flex-grow md:w-[50%] md:overflow-y-auto md:px-0 text-center items-center bg-special-800 p-4 pb-10 border-0 md:h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}