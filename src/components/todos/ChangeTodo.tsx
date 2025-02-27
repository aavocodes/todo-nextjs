import { todoProps } from "@/types";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import { FaCheck } from 'react-icons/fa'
import { changeStatus } from "@/app/lib/actions";


export default function ChangeTodo({ todo }: { todo: todoProps }) {
    return (
        <Form action={changeStatus}>
            <Input name='inputId' value={todo.id} type='hidden' />
            <Button
                text={<FaCheck />}
                type='submit'
                actionButton
                // bgColor={todo.isCompleted ? 'bg-jade-600' : 'bg-special-600'}>
                bgColor={`transition-colors duration-200 ${todo.isCompleted ? 'bg-jade-600 shadow-sm shadow-jade-300' : 'bg-special-600'
                    }`}>
            </Button>
        </Form>
    )
}