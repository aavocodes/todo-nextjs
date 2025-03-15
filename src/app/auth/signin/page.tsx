"use client";

import { roboto } from "@/app/ui/font";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card/Card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form/Forms";
import { FormInputs } from "@/components/input/FormInputs";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { signInSchema } from "@/app/lib/zod";
import LoadingButton from "@/components/button/LoadingButton";
import {
    handleCredentialsSignin,
    handleGithubSignin,
} from "@/app/lib/actions";
import { useState, useEffect, Suspense } from "react";
import ErrorMessage from "@/components/error/Error";
import { FormButtons } from "@/components/button/FormButtons";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function SignInContent() {
    const params = useSearchParams();
    const error = params.get("error");
    const router = useRouter();

    const [globalError, setGlobalError] = useState<string>("");

    useEffect(() => {
        if (error) {
            switch (error) {
                case "OAuthAccountNotLinked":
                    setGlobalError(
                        "Please use your email and password to sign in."
                    );
                    break;
                default:
                    setGlobalError(
                        "An unexpected error occurred. Please try again."
                    );
            }
        }
        router.replace("/auth/signin");
    }, [error, router]);

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signInSchema>) => {
        try {
            const result = await handleCredentialsSignin(values);
            if (result?.message) {
                setGlobalError(result.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={`${roboto.className} grow flex items-center justify-center p-4 md:mt-8 mt-12`}>
            <div className="relative mx-auto w-full max-w-md flex-col space-y-4 p-4 sm:p-6 md:p-8 lg:w-1/3">
                <div className="flex h-14 sm:h-16 w-full items-end rounded-lg border border-special-200/40 bg-special-50/50 p-3 backdrop-blur-md shadow-md">
                    <div className="w-32 text-gray-100 sm:w-36">
                        🍵
                    </div>
                </div>
                <Card className="w-full max-w-md border border-special-200/40 bg-special-50/50 backdrop-blur-md shadow-md">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-special-800">
                            Welcome Back
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {globalError && <ErrorMessage error={globalError} />}
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-special-800'>Email</FormLabel>
                                            <FormControl>
                                                <FormInputs
                                                    type="email"
                                                    placeholder="＠ Enter email address"
                                                    autoComplete="off"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-special-800'>Password</FormLabel>
                                            <FormControl>
                                                <FormInputs
                                                    type="password"
                                                    placeholder="🔑 Enter password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Submit button will go here */}
                                <LoadingButton
                                    pending={form.formState.isSubmitting}
                                >
                                    Sign in
                                </LoadingButton>
                            </form>
                        </Form>

                        <span className="text-sm text-special-800 text-center block my-2">
                            or
                        </span>
                        <form className="w-full" action={handleGithubSignin}>
                            <FormButtons
                                variant="outline"
                                className="w-full bg-special-50 hover:bg-special-100 border border-special-100 backdrop-blur-md shadow-md"
                                type="submit"
                            >
                                <GitHubLogoIcon className="h-4 w-4 mr-2" />
                                Sign in with GitHub
                            </FormButtons>
                            <div className="flex h-8 mt-2 justify-center  space-x-1 text-special-800">
                                <span className='text-sm mt-3'>Don&apos;t have an account?</span>
                                <Link className='text-sm mt-3 underline hover:text-blue-400'
                                    href='/auth/signup'>
                                    Register
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default function SignIn() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignInContent />
        </Suspense>
    );
}