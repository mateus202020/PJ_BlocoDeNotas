/* eslint-disable react/jsx-no-undef */
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input} from '../../componentes/input';

import { Button} from '../../componentes/button';

import { Container, Form, Avatar } from './style';

import { Link } from 'react-router-dom';

export function Profile(){
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
                />

                <Input
                    placeholder= "Email"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="senha atual"
                    type="password"
                    icon={FiLock}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                />
            
            <Button title="Salvar"/>

            </Form>

        </Container>
    )
}