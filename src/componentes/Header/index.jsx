
import { Container, Profile,  Logout} from './style';

import {RiShutDownLine} from 'react-icons/ri';

export function Header(){
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

          <Logout>
            <RiShutDownLine />
          </Logout>
        </Container>
    );
}