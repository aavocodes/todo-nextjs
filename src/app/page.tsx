import { roboto } from "./ui/font";
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css'
import NavBar from "./ui/dashboard/navigation";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <NavBar />
      <div className="flex h-20 shrink-0 items-end rounded-lg border border-special-400 bg-special-500 p-4 md:h-52 mt-16">
        <h1 className='text-5xl text-gray-200'>
          🍵 Logo
        </h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className={`flex flex-col justify-center gap-6 rounded-lg bg-special-700 px-6 py-10 md:w-2/5 md:px-20 border border-special-400`}>
          <div className={`${styles.shape}`} />
          <p className={`${roboto.className} text-xl text-gray-50 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Tadow. </strong>
            <span className='block text-gray-200'>
              This is my personalized task manager app, built for daily productivity.
            </span>
          </p>
          <div className='flex grow flex-col lg:flex-row gap-4 mt-4'>
            <Link
              href='/dashboard'
              className='flex items-center gap-4 self-start rounded-md bg-special-500 px-6 py-3 text-sm font-medium transition-colors hover:bg-special-600 md:text-base whitespace-nowrap'
            >
              <span>Login</span> <ArrowRightIcon className='w-5 md:w-6' />
            </Link>
            <Link
              href='/signup'
              className='flex items-center gap-4 self-start rounded-md bg-special-500 px-5 py-3 text-sm font-medium transition-colors hover:bg-special-600 md:text-base whitespace-nowrap'
            >
              <span>Signup</span> <ArrowRightIcon className='w-5 md:w-6' />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
