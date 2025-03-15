import { roboto } from "./ui/font";
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <main className={`${roboto.className} flex min-h-screen flex-col p-6`}>
      <div className="flex h-20 shrink-0 items-end rounded-lg border border-special-200/40 bg-special-50/50 p-4 md:h-40 md:px-20 md:w-2/5 mt-16 backdrop-blur-md shadow-md">
        <h1 className='text-5xl text-gray-200'>
          🍵 
        </h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className={`flex flex-col justify-center gap-6 rounded-lg bg-special-50/50 px-6 py-10 md:w-2/5 md:px-20 border border-special-200/40 backdrop-blur-md shadow-md`}>
          <div className={`${styles.shape} animate-bounce-up`} />
          <p className={`${roboto.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            {session?.user?.name ? (
              <>
                Welcome back,{" "}
                <span className='inline-block text-jade-600'>
                  <strong> {session.user.name}</strong>
                </span>
                .
                <span className='block text-gray-800'>
                  This is your personalized task manager app, built for daily productivity.
                </span>
              </>
            ) : (
              <>
                <strong className='text-gray-800'>Please Login.</strong>
                <span className='block text-gray-800'>
                  This is your personalized task manager app, built for daily productivity.
                </span>
              </>
            )}
          </p>

          {session?.user?.name ? (
            <div className='mt-4'>
              <Link
                href='/dashboard'
                className='flex items-center gap-4 justify-between self-start rounded-lg bg-jade-600/80 px-6 py-3 text-sm font-medium transition-colors hover:bg-jade-600 hover:border-jade-600 border border-jade-400 md:text-base whitespace-nowrap backdrop-blur-md shadow-md'
              >
                <span>Dashboard</span> <ArrowRightIcon className='w-5 md:w-6' />
              </Link>
            </div>
          ) : (
            <div className='flex grow flex-col lg:flex-row gap-4 mt-4'>
              <Link
                href='/auth/signin'
                  className='flex items-center gap-4 self-start rounded-lg bg-jade-600/80 px-6 py-3 text-sm font-medium transition-colors hover:bg-jade-600 hover:border-jade-600 border border-jade-400 md:text-base whitespace-nowrap backdrop-blur-md shadow-md'
              >
                <span>Login</span> <ArrowRightIcon className='w-5 md:w-6' />
              </Link>
              <Link
                href='/auth/signup'
                  className='flex items-center gap-4 self-start rounded-lg bg-jade-600/80 px-5 py-3 text-sm font-medium transition-colors hover:bg-jade-600 hover:border-jade-600 border border-jade-400 md:text-base whitespace-nowrap backdrop-blur-md shadow-md'
              >
                <span>Signup</span> <ArrowRightIcon className='w-5 md:w-6' />
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
