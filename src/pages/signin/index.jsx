import {  Container, Form, Background } from './style'

import {FiMail, FiLock } from 'react-icons/fi';

import {Button} from '../../componentes/button';

import {Input} from '../../componentes/input';

import { Link } from 'react-router-dom';

export function Signin(){
    return(
        <Container>
            <Form>
                <h1>Bloco de Notas</h1>

                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>


                <Input
                    placeholder="E-mail"
                    type='text'
                    Icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type='password'
                    Icon={FiLock}
                />

                <Button title='Entrar'/>

               <Link to='/register'>
                    Criar conta
               </Link>
            </Form>

            <Background/>

        </Container>
    )
}