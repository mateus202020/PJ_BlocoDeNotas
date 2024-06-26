import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button} from '../../componentes/button';
import {Container, Links, Content} from './style';
import { Header } from '../../componentes/Header';
import { Section } from '../../componentes/section';
import {Tag} from '../../componentes/tag';
import { ButtonText } from '../../componentes/ButtonText';
import {api} from '../../services/api';

export function App() {

    const params = useParams();

    const navigate = useNavigate();

    const [data, setData] = useState({});

    function handleBack(){
      navigate("/");
    }

    async function handleRemove(){
      const confirm = window.confirm("Deseja realmente remover a nota?");

      if(confirm){
        await api.delete(`/notes/${params.id}`);
        navigate(-1)
      }
    }
    
    useEffect(() => {
      async function fetchNote() {
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data);
      }
      fetchNote();
    }, []);


    return (
      <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"  onClick={handleRemove}/>

          <h1>
            {data.title}
          </h1>

          <p>
              {data.description}
          </p>

        {
          data.links &&  
            <Section  title='Links úteis'>
              <Links>
                {
                   data.links.map(link => (
                    <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                            {link.url}
                        </a>
                    </li>
                ))
              }
              </Links>
            </Section>
        }

        {
          data.tags && 
          <Section  title='Marcadores'>
          {
              data.tags.map(tag => (
                  <Tag 
                  key={String(tag.id)}
                  title={tag.name}
                  />
              ))
          }
          </Section>
        }
        

          <Button title="Voltar" onClick={handleBack}/>
          </Content>
      </main>
      </Container>
    )
  }