

export default function NavBar() {
    return (
        <nav className="anitialiased border-b border-special-500 bg-special-800 py-2 px-4 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <span className="text-xl anitialiased text-special-50">📝 Insert logo...</span>
            </div>

            {/* Navigation Links */}
            {/* <ul className="hidden md:flex gap-6 text-special-50 text-sm border border-special-500 px-3 py-1">
                <div className='border-r border-special-500 pr-3'>
                <li className="hover:text-special-300 cursor-pointer transition">Home</li>
                </div>
                <div className='border-r border-special-500 pr-6'>
                <li className="hover:text-special-300 cursor-pointer transition">Tasks</li>
                </div>
                <div className='text-center'>
                <li className="hover:text-special-300 cursor-pointer transition">Settings</li>
                </div>
            </ul> */}
            <ul className="hidden md:flex text-special-50 text-sm border border-special-500 px-0 py-0 overflow-hidden rounded-md">
                <li className="px-4 py-2 border-r border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                    Home
                </li>
                <li className="px-4 py-2 border-r border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                    Tasks
                </li>
                <li className="px-4 py-2 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                    Settings
                </li>
            </ul>

            {/* Action Button */}
            <button className="bg-special-600 hover:bg-special-700 text-special-50 px-4 py-2 rounded-lg transition">
                <p className='text-sm'>Sign In</p>
            </button>
        </nav>
    )
}