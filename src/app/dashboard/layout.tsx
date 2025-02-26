import NavBar from '../ui/dashboard/navigation';
import TodoCompleter from '@/app/ui/dashboard/todo-completer'

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar />
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:px-0 bg-special-600">
                <div className="w-full flex-col flex md:w-[500px]">
                    <TodoCompleter />
                </div>
                <div className="flex-grow md:overflow-y-auto md:px-0 text-center items-center bg-special-800 p-4 border-l border-b border-r border-special-500 md:h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}