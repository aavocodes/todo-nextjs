import { roboto } from "./ui/font";
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className={`${roboto.className} w-screen py-20 flex justify-center flex-col items-center`}>
      <span className='text-4xl font-extrabold uppercase'>Next Todo App</span>
      <h1 className='text-5xl font-extrabold mb-5 text-center'>
        <span className='lowercase'>w/</span> SERVER ACTIONS
      </h1>
      <div className='flex flex-row gap-4'>
        <Link
          href='/dashboard'
          className='flex items-center gap-4 rounded-md bg-special-600 px-6 py-3 text-sm font-medium transition-colors hover:bg-special-700 md:text-base whitespace-nowrap'
        >
          <span>Login</span> <ArrowRightIcon className='w-5 md:w-6' />
        </Link>
        <Link
          href='/signup'
          className='flex items-center gap-4 rounded-md bg-special-600 px-6 py-3 text-sm font-medium transition-colors hover:bg-special-700 md:text-base whitespace-nowrap'
        >
          <span>Signup</span> <ArrowRightIcon className='w-5 md:w-6' />
        </Link>
      </div>
    </div>
  );
}
