import { BsTrash } from "react-icons/bs";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import { todoProps } from '@/types'
import * as actions from '@/app/lib/actions'

export default function DeleteTodo({ todo }: { todo: todoProps }) {
    return (
        <Form action={actions.deleteTodo}>
            <Input type='hidden' name='inputId' value={todo.id} />
            <Button actionButton type='submit' bgColor='bg-special-100 hover:bg-burg-700' text={<BsTrash className='text-black' />} />
        </Form>
    )
}