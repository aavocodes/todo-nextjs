'use client'

import { formProps } from "@/types"
import { useRef } from 'react'

// add className back as prop after deployment
export default function Form({ children, action, onSubmit }: formProps) {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form action={async (formData) => {
            await action(formData);
            ref.current?.reset();
        }}
            onSubmit={onSubmit}
            ref={ref}
        >
            {children}
        </form>
    )
}