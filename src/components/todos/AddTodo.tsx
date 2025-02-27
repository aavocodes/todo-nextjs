import Button from '../button/Button'
import Input from '../input/Input'
import Form from '../form/Form'
import createTodo from '@/app/lib/actions';
import { Suspense } from 'react'

export default function AddTodo() {
    return (
        <div>
            <Suspense>
                <Form action={createTodo}>
                    <div className='flex gap-2'>
                        <Input name='input' type='text' placeholder='Add todo...' />
                        <Button type='submit' text='Add' bgColor='bg-special-600' />
                    </div>
                </Form>
            </Suspense>
        </div>
    );
}

