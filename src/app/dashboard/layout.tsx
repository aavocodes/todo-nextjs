import NavBar from '../ui/dashboard/navigation';
import TodoCompleter from '@/app/ui/dashboard/todo-completer'
import { roboto } from '../ui/font';
 
export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${roboto.className}`}>
            <NavBar />
            <div className="pt-16 w-full flex h-screen flex-col md:flex-row md:overflow-hidden md:px-0 bg-special-800">
                <div className="w-full flex-col flex md:w-[50%] order-last md:order-first">
                    <TodoCompleter />
                </div>
                <div className="flex-grow md:w-[50%] md:overflow-y-auto md:px-0 text-center items-center bg-special-800 p-4 pb-10 border-0 border-special-300 md:border-l md:h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}