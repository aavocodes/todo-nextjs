import Button from '../button/Button'
import Input from '../input/Input'
import Form from '../form/Form'
import * as actions from '@/app/lib/actions'
import { Suspense } from 'react'
import { MdAdd } from 'react-icons/md'
export default function AddTodo() {
    return (
        <div>
            <Suspense>
                <Form action={actions.createTodo}>
                    <div className='flex gap-2'>
                        <Input name='input' type='text' placeholder='Add todo...' className='py-[7px] mt-[1px]' />
                        <Button type='submit' text={<MdAdd size={15} />} bgColor='bg-special-600 hover:bg-special-700' className='py-[12.3px] mt-[1.3px]'/>
                    </div>
                </Form>
            </Suspense>
        </div>
    );
}

