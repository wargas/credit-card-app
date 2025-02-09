
import { auth } from '@/auth'
import Form from 'next/form'
import { redirect } from 'next/navigation'
import { doLogin } from './actions'

export default async function Login() {

    const session = await auth()

    if(session?.user) {
        redirect('/dashboard')
    }

    return <div>
        <Form action={doLogin}>

            <h1>Login</h1>

            <button type='submit'>Entrar</button>
        </Form>
    </div>
}