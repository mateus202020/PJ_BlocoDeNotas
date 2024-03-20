
import {Button} from '../../componentes/button';
import {Container, Links, Content} from './style';
import { Header } from '../../componentes/Header';
import { Section } from '../../componentes/section';
import {Tag} from '../../componentes/tag';
import { ButtonText } from '../../componentes/ButtonText';


export function App() {
  
    return (
      <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolor rerum cum magni, porro at repudiandae eligendi omnis deleniti incidunt rem beatae facere harum quos facilis. 
              Nemo optio libero in quisquam.
          </p>

          <Section  title='Links úteis'>
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section  title='Marcadores'>
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
          </Content>
      </main>
      </Container>
    )
  }