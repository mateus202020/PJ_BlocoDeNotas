import { useState } from 'react';

import {  Container, Form, Background } from './style'

import {FiMail, FiLock, FiUser } from 'react-icons/fi';

import {Button} from '../../componentes/button';

import {Input} from '../../componentes/input';

import { Link } from 'react-router-dom';

import {api} from "../../services/api";

export function Singup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useState();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Prencha todos os campos!");
        }
        api.post("/users", {name,email, password}).then(() => {
            alert("Usuário Cadastrado com sucesso!");
            navigate("/");
        }).catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastar");
            }
        });
    }

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
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type='text'
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type='password'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title='Cadastrar' onClick={handleSignUp}/>

                <Link to='/'>
                    Voltar para o Login
                </Link>
            </Form>


        </Container>
    )
}