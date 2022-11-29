export const RandomLoader = () => {
    return (
        <div className="border border-teal-400 shadow rounded-md p-2 w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-teal-400 w-40 aspect-square"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-teal-400 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-teal-400 rounded col-span-2"></div>
                            <div className="h-2 bg-teal-400 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-teal-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const CardLoader = () => {
    return (
        <div className="border border-teal-400 shadow rounded-md p-2 w-full mx-auto">
            <div className="animate-pulse flex flex-col ">
                <div className="rounded bg-teal-400 aspect-square w-full"></div>
                <div className="flex-1 space-y-6 py-1 mt-5">
                    <div className="h-2 bg-teal-400 rounded w-full"></div>
                    <div className="space-y-3">
                        <div className="h-2 bg-teal-400 rounded"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-teal-400 rounded col-span-2"></div>
                            <div className="h-2 bg-teal-400 rounded col-span-1"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}