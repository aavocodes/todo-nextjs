
export function TodoSkeleton() {
    return (
        <div className='max-w-[400px] md:w-[368px]'>
            <div className="h-[80px] grow mx-auto flex flex-row my-1 items-center bg-special-800 border border-special-300 py-4 pl-4 rounded-2xl bg-gradient-to-r from-special-700 to-special-700 animate-pulse">
                <div className="w-11 h-8 bg-special-600 rounded-md" />
                <div className="mx-3 w-[180px] h-6 bg-special-600 rounded-md" />
                <div className="flex mr-3 space-x-2">
                    <div className="w-11 h-8 bg-special-600 rounded-md" />
                    <div className="w-11 h-8 bg-special-600 rounded-md" />
                </div>
            </div>
        </div>
    );
}

export function TodoCompleterSkeleton() {
    return (
        <div className="flex flex-grow flex-col py-4 w-full items-center border-t border-special-300 md:border-0 md:border-r">
            <div className="flex flex-col grow bg-special-800 p-4 text-center w-full">
                <h1 className="text-lg md:text-2xl text-center">Completed todos</h1>

                <div className="flex flex-col items-center mt-6 w-full">
                    <div className="max-w-[400px] w-full p-4 rounded-lg">
                        <div className="w-full space-y-4">
                            {[...Array(6)].map((_, i) => (
                                <TodoSkeleton key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TodoCreatorSkeleton() {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='max-w-[400px] w-[368px] py-6'>
                <div className="flex gap-2 h-[40px] bg-special-800 rounded-lg animate-pulse">
                    <div className='w-[313px] bg-special-600 rounded-lg py-[7px] mt-[1px]' />
                    <div className='w-[47px] bg-special-700 rounded-lg py-[11.5px] mt-[1.5px]' />
                </div>
                <div className='w-full mt-12 space-y-4'>
                    {[...Array(3)].map((_, i) => (
                        <TodoSkeleton key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export function DashboardSkeleton() {
    return (
        <div className="pt-16 w-full flex h-screen flex-col md:flex-row md:overflow-y-auto md:px-0 bg-special-800">
            <div className="w-full flex-col flex md:w-[50%] md:overflow-y-auto order-last md:order-first bg-special-800">
                <TodoCompleterSkeleton />
            </div>
            <div className="flex-grow md:w-[50%] md:overflow-y-auto md:px-0 text-center items-center bg-special-800 p-4 pb-10 border-0 md:h-full">
                <TodoCreatorSkeleton />
            </div>
        </div>
    )
}