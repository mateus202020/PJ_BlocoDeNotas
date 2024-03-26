import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { useState, useEffect } from 'react';

import { Header } from '../../componentes/Header';

import {ButtonText} from '../../componentes/ButtonText';

import { FiPlus, FiSearch  } from 'react-icons/fi';

import {Input} from '../../componentes/input';

import {Section} from '../../componentes/section';

import {Note} from '../../componentes/note';

import {api} from "../../services/api";

export function Home(){

    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();

    },[]);

    return(
        <Container>
             <Brand>
                <h1>Boloco Notas</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title='Todos' $isactive/></li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}><ButtonText title={tag.name}/></li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder='Pesquise pelo título' icon={FiSearch}/>
            </Search>
               
            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rocketseat'}
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus/>
                    Criar Nota
            </NewNote>

        </Container>
    )
}