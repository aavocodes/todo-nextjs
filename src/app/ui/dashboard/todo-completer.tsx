import { PowerIcon } from '@heroicons/react/24/outline';

export default function TodoCompleter() {
    return (
        <div className="flex h-full flex-col bg-special-600 md:p-0">
            <div
                className="hidden md:flex grow flex-col h-20 bg-special-800 p-4 md:h-40 border-l border-b border-special-500 text-center">
                <h1 className='text-xl md:text-2xl'>Completed todos</h1>
            </div>
        </div>
    );
}
