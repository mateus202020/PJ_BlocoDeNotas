import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Avatar } from "./style";
import { Input } from "../../componentes/input";
import { Button } from "../../componentes/button";
import placeholderAvatar from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";

export function Profile() { 
  const navigate = useNavigate();

  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      oldPassword: oldPassword,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }



  return (
    <Container>
      <header>
        <button onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} />
        </button>
      </header>
      <Form>
        <Avatar>
          <img 
            src={ avatar }  
            alt={user.name}
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>
        

        <Input 
          type="text" 
          placeholder="Nome" 
          icon={FiUser}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input 
          type="text" 
          placeholder="E-mail" 
          icon={FiMail}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input 
          type="password" 
          placeholder="Senha atual" 
          icon={FiLock}
          onChange={(event) => setOldPassword(event.target.value)}
        />

        <Input 
          type="password" 
          placeholder="Nova senha" 
          icon={FiLock}
          onChange={(event) => setNewPassword(event.target.value)}
        />

        <Button 
          title="Salvar" 
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  );
}