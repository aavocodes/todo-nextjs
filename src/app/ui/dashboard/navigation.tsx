

export default function NavBar() {
    return (
        // <nav className='border border-special-500 bg-special-800 py-3 text-center'>
        //     <ul>
        //         <li>Nav</li>
        //     </ul>
        // </nav>
        <nav className="border-b border-special-500 bg-special-800 py-2 px-4 flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-special-50">📝 Todo</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex gap-6 text-special-50 text-sm">
                <li className="hover:text-special-300 cursor-pointer transition">Home</li>
                <li className="hover:text-special-300 cursor-pointer transition">Tasks</li>
                <li className="hover:text-special-300 cursor-pointer transition">Settings</li>
            </ul>

            {/* Action Button */}
            <button className="bg-special-600 hover:bg-special-700 text-special-50 px-4 py-2 rounded-lg transition">
                <p className='text-sm'>Sign In</p>
            </button>
        </nav>
    )
}