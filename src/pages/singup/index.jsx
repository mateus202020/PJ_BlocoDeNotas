import {  Container, Form, Background } from './style'

import {FiMail, FiLock, FiUser } from 'react-icons/fi';

import {Button} from '../../componentes/button';

import {Input} from '../../componentes/input';

import { Link } from 'react-router-dom';

export function Singup(){
    return(
        <Container>

            <Background/>

            <Form>
                <h1>Bloco de Notas</h1>

                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type='text'
                    Icon={FiUser}
                />

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

                <Button title='Cadastrar'/>

                <Link to='/'>
                    Voltar para o Login
                </Link>
            </Form>


        </Container>
    )
}