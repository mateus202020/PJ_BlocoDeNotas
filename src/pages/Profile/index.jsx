/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input} from '../../componentes/input';

import {  useAuth } from '../../hooks/auth';

import { Button} from '../../componentes/button';

import { Container, Form, Avatar } from './style';

import { Link } from 'react-router-dom';

import {api} from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile(){
    const {user, updatedProfile} =  useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [PasswordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

   

    async function handleUpdate(){
        const user = {
            name, 
            email, 
            password: passwordNew,
            old_password: PasswordOld,
        }
        
        await updatedProfile({ user, avatarFile});
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);
    
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }


    return(
        <Container>
        <header>
          <Link to="/">
            <FiArrowLeft size={24} />
          </Link>
        </header>
  
        <Form>
          <Avatar>
            <img
              src={avatar}
              alt={user.name}
            />
  
            <label htmlFor="avatar">
              <FiCamera />
  
              <input
                id="avatar"
                type="file"
                onChange={handleChangeAvatar}
              />
            </label>
          </Avatar>
  
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
          />
  
          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
  
          <Input
            placeholder="Senha atual"
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
  
          <Button title="Salvar" onClick={handleUpdate} />
        </Form>
      </Container>
    )
}