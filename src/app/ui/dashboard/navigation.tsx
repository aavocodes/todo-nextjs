
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-special-600/30 backdrop-blur-md shadow-md py-3 px-4 flex items-center justify-between z-50 border-b border-special-500">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Link href='/'>
                    <span className="text-xl antialiased text-special-50">📝</span>
                </Link>
                <span className='text-lg antialiased text-special-50'>Insert logo...</span>
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex text-special-50 text-sm border border-special-500 px-0 py-0 overflow-hidden rounded-md justify-center">
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
            <button className="px-4 py-2 bg-special-800 hover:bg-special-700 border border-special-500 rounded-lg transition">
                <p className='text-sm text-special-50'>Sign In</p>
            </button>
        </nav>
    )
}