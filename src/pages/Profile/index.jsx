/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input} from '../../componentes/input';

import {  useAuth } from '../../hooks/auth';

import { Button} from '../../componentes/button';

import { Container, Form, Avatar } from './style';

import { Link } from 'react-router-dom';

export function Profile(){
    const {user, updateProfile} =  useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [PasswordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate(){
        const updatedUser = {
            name, 
            email, 
            password: passwordNew,
            old_password: PasswordOld,
        }
        
        await updateProfile({user: updatedUser});
    }


    return(
        <Container>
            <header>
                <Link to="/">
                <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                         src= 'https://github.com/mateus202020.png'
                         alt= 'Foto do usuário'
                    />
     
                     <label htmlFor='Avatar'>
                         <FiCamera/>
     
                         <input
                             id="avatar"
                             type="file"
                         />
                     </label>
                    
                    
                </Avatar>

                <Input
                    placeholder = "Nome"
                    type = "text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder= "Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />
            
            <Button title="Salvar" onClick={handleUpdate}/>

            </Form>

        </Container>
    )
}