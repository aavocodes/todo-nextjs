'use client';

// import { MdAdd } from 'react-icons/md';
import {
    AtSymbolIcon,
    KeyIcon,
    // ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
// import { useActionState } from 'react';
// import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import { roboto } from './font';
import Link from 'next/link';

export default function SignupForm() {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
    // const [errorMessage, formAction, isPending] = useActionState(
    //     authenticate,
    //     undefined,
    // );

    return (
        <form className={`${roboto.className} space-y-3`}>
            <div className="flex-1 rounded-lg bg-special-600 border border-special-400 px-6 pb-4 pt-8">
                <h1 className={`${roboto.className} mb-3 text-2xl`}>
                    Please create an account to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-200"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-200"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter a unique password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <button
                    type='submit'
                    className="mt-6 w-full bg-special-800 hover:bg-special-700 transition cursor-pointer text-gray-50 hover:text-special-50 border border-special-500 rounded-lg flex items-center justify-center space-x-2 py-2 px-3"

                >
                    Signup <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                </button>
                <div className="flex h-8 justify-end space-x-1">
                    {/* Add form errors here */}
                    {/* {errorMessage && (
                        <>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )} */}
                    <span className='mt-3 text-sm'>Already have an account?</span>
                    <Link className='mt-3 text-sm underline hover:text-blue-400'
                        href='/login'>
                        Login
                    </Link>
                </div>
            </div>
        </form>
    );
}
