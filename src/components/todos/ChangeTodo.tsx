import { todoProps } from "@/types";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import { FaCheck } from 'react-icons/fa'
import * as actions from '@/app/lib/actions'


export default function ChangeTodo({ todo }: { todo: todoProps }) {
    return (
        <Form action={actions.changeStatus}>
            <Input name='inputId' value={todo.id} type='hidden' />
            <Button
                text={<FaCheck />}
                type='submit'
                actionButton
                bgColor={`transition-colors duration-5 ${todo.isCompleted ? 'bg-jade-600 hover:bg-jade-700'  : 'bg-special-600 hover:bg-jade-700'
                    }`}>
            </Button>
        </Form>
    )
}