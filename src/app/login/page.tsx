import { Suspense } from 'react';
import LoginForm from '../ui/login-form';
import NavBar from '../ui/dashboard/navigation';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <NavBar />
            <div className="relative mx-auto w-full max-w-md flex-col space-y-4 p-4 sm:p-6 md:p-8 lg:w-1/3">
                <div className="flex h-20 sm:h-24 w-full items-end rounded-lg bg-special-500 p-3">
                    <div className="w-32 text-gray-100 sm:w-36">
                        🍵
                    </div>
                </div>
                <Suspense>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    );
}