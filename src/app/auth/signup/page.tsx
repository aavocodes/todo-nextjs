"use client";

import { roboto } from "@/app/ui/font";
import { useState, Suspense } from "react";
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
import LoadingButton from "@/components/button/LoadingButton";
import ErrorMessage from "@/components/error/Error";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signUpSchema } from "@/app/lib/zod";
import {
    handleCredentialsSignin,
    handleSignUp,
} from "@/app/lib/actions";
import Link from 'next/link';
import { ServerActionResponse } from "@/types/actions";

export default function SignUp() {
    const [globalError, setGlobalError] = useState("");

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
        try {
            const result: ServerActionResponse = await handleSignUp(values);
            if (result.success) {
                console.log("Account created successfully.");
                const valuesForSignin = {
                    email: values.email,
                    password: values.password,
                };
                await handleCredentialsSignin(valuesForSignin);
            } else {
                setGlobalError(result.message);
            }
        } catch {
            setGlobalError("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className={`${roboto.className} grow flex items-center justify-center p-4 md:mt-8 mt-12`}>
                <div className="relative mx-auto w-full max-w-md flex-col space-y-4 p-4 sm:p-6 md:p-8 lg:w-1/3">
                    <div className="flex h-14 sm:h-16 w-full items-end rounded-lg bg-special-500 p-3">
                        <div className="w-32 text-gray-100 sm:w-36">
                            🍵
                        </div>
                    </div>
                    <Card className="w-full max-w-md bg-special-700 border border-special-500">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-center text-special-50">
                                Create Account
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {globalError && <ErrorMessage error={globalError} />}
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-2 text-special-50 mb-4"
                                >
                                    {[
                                        "name",
                                        "email",
                                        "password",
                                        "confirmPassword",
                                    ].map((field) => (
                                        <FormField
                                            control={form.control}
                                            key={field}
                                            name={
                                                field as keyof z.infer<
                                                    typeof signUpSchema
                                                >
                                            }
                                            render={({ field: fieldProps }) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        {field.charAt(0).toUpperCase() +
                                                            field.slice(1)}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <FormInputs
                                                            type={
                                                                field.includes(
                                                                    "password"
                                                                )
                                                                    ? "password"
                                                                    : field === "email"
                                                                        ? "email"
                                                                        : "text"
                                                            }
                                                            placeholder={`Enter your ${field}`}
                                                            {...fieldProps}
                                                            autoComplete="off"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                    <br />
                                    <LoadingButton
                                        pending={form.formState.isSubmitting}
                                    >
                                        Sign up
                                    </LoadingButton>
                                    <div className="flex h-1 justify-center space-x-1">
                                        <span className='mt-2 text-sm'>Already have an account?</span>
                                        <Link className='mt-2 text-sm underline hover:text-blue-400'
                                            href='/auth/signin'>
                                            Login
                                        </Link>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Suspense>
    );
}