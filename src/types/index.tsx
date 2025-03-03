import { ReactNode } from "react";

export interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface formProps {
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface buttonProps {
    type?: 'button' | 'submit' | 'reset';
    text: string | ReactNode;
    onClick?: () => void;
    actionButton?: boolean;
    bgColor?: string;
    className?: string;
}

export interface todoProps {
    id: string;
    title?: string | null;
    isCompleted: boolean;
    createAt?: Date;
}