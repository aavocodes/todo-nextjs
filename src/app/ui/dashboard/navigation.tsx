import Link from 'next/link'
import { auth } from '@/auth'
import { handleSignOut } from '@/app/lib/actions';

export default async function NavBar() {

    const session = await auth();
    console.log(session)

    return (
        <nav className="fixed top-0 left-0 right-0 rounded-lg bg-special-600/30 backdrop-blur-md shadow-md py-3 px-4 flex items-center justify-between z-50 border-b border-special-500 mx-auto">
            <div className="flex items-center gap-2">
                <Link href='/'>
                    <span className="text-2xl antialiased text-special-50">🍵</span>
                </Link>
            </div>

            <div className='ml-16'>
                <ul className="hidden md:flex text-special-50 text-sm border border-special-500 pl-0 py-0 overflow-hidden rounded-lg justify-center">
                    <li className="px-4 py-2 border-r border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                        <Link
                            href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="px-4 py-2 border-r border-special-500 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                        <Link
                            href='/dashboard'>
                            Tasks
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:text-special-50 hover:bg-special-700 cursor-pointer transition bg-special-800">
                        Settings
                    </li>
                </ul>
            </div>

            {!session ? (
                <Link
                    className='text-xs text-special-50'
                    href='/auth/signin' >
                    <button className="px-4 py-2 bg-special-800 hover:bg-special-700 border border-special-500 rounded-lg transition">
                        Sign In
                    </button>
                </Link>
            ) : (
                <form action={handleSignOut} className='text-xs  text-special-50'>
                    <button
                        className="px-4 py-2 bg-special-800 hover:bg-special-700 border border-special-500 rounded-lg transition"
                        type='submit' >
                        Sign Out
                    </button>
                </form>
            )}
        </nav>
    )
}