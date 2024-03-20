
import { useAuth } from '../../hooks/auth';
import { Container, Profile,  Logout} from './style';

import {RiShutDownLine} from 'react-icons/ri';

export function Header(){

    const {signOut} = useAuth();

    return(
        <Container>
           <Profile to="/profile">
            <img
                src="https://github.com/mateus202020.png"
                alt="Foto do usuário"
            />
            <div>
                <span>Bem-vindo</span>    
                <strong>Mateus Gabriel</strong>
            </div>    
           </Profile>

          <Logout onClick={signOut}>
            <RiShutDownLine />
          </Logout>
        </Container>
    );
}