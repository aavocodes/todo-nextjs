import Link from 'next/link'
import { auth } from '@/auth'
import { handleSignOut } from '@/app/lib/actions';

export default async function NavBar() {

    const session = await auth();
    console.log(session)

    return (
        <nav className="fixed top-0 left-0 right-0 rounded-b-lg bg-special-50/50 backdrop-blur-md shadow-md py-3 px-4 flex items-center justify-between z-50 border-b border-special-200/40 mx-auto">
            <div className="flex items-center gap-2">
                <Link href='/'>
                    <span className="text-2xl">
                        🍵
                    </span>
                </Link>
            </div>

            <div className='ml-16'>
                <ul className="hidden md:flex text-special-50 text-sm pl-0 py-0 overflow-hidden rounded-lg justify-center backdrop-blur-md shadow-md">
                    <li className="px-4 py-2 border-r border-jade-600/30 hover:text-special-50 hover:bg-jade-600 cursor-pointer transition bg-jade-600/80">
                        <Link
                            href='/'>
                            Home
                        </Link>
                    </li>
                    <li className="px-4 py-2 border-r border-jade-600/30 hover:text-special-50 hover:bg-jade-600 cursor-pointer transition bg-jade-600/80">
                        <Link
                            href='/dashboard'>
                            Tasks
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:text-special-50 hover:bg-jade-600 cursor-pointer transition bg-jade-600/80">
                        Settings
                    </li>
                </ul>
            </div>

            {!session ? (
                <Link
                    className='text-sm text-gray-50'
                    href='/auth/signin' >
                    <button className="px-4 py-2 bg-jade-600/80 hover:bg-jade-600 rounded-lg transition backdrop-blur-md shadow-md">
                        Sign In
                    </button>
                </Link>
            ) : (
                <form action={handleSignOut} className='text-sm text-gray-50'>
                    <button
                        className="px-4 py-2 bg-jade-600/80 hover:bg-jade-600 rounded-lg transition backdrop-blur-md shadow-md"
                        type='submit' >
                        Sign Out
                    </button>
                </form>
            )}
        </nav>
    )
}