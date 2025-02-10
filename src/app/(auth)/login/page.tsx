
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Form from 'next/form'
import { redirect } from 'next/navigation'
import { doLogin } from './actions'

export default async function Login() {

    const session = await auth()

    if (session?.user) {
        redirect('/dashboard')
    }

    return <div className='h-screen bg-gray-50 flex items-center w-full'>
        <div className="w-full max-w-md mx-auto">
            <Form action={doLogin}>
                <Card>
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Informe suas credenciais</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label>Email</Label>
                            <Input type='email' />
                        </div>

                        <div>
                            <Label>Senha</Label>
                            <Input type='password' />
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-4'>
                        <Button type='submit' className='w-full'>Entrar</Button>
                        <Button variant={'outline'} type='submit' className='w-full'>Cadastre-se</Button>
                    </CardFooter>
                </Card>
            </Form>
        </div>
    </div>
}