import { Suspense } from 'react';
import SignupForm from '../ui/signup-form';
import NavBar from '../ui/dashboard/navigation';
import { roboto } from '../ui/font';

export default function SignupPage() {
    return (
        <main className={`${roboto.className} flex items-center justify-center min-h-screen`}>
            <NavBar />
            <div className="relative mx-auto w-full max-w-md flex-col space-y-4 p-4 sm:p-6 md:p-8 lg:w-1/3 md:mt-[1.7%] mt-[4.8%]">
                <div className="flex h-20 sm:h-24 w-full items-end rounded-lg bg-special-500 p-3">
                    <div className="w-32 text-gray-100 sm:w-36">
                        🍵
                    </div>
                </div>
                <Suspense>
                    <SignupForm />
                </Suspense>
            </div>
        </main>
    );
}