
import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { Header } from '../../componentes/Header';

import {ButtonText} from '../../componentes/ButtonText';

import { FiPlus, FiSearch  } from 'react-icons/fi';

import {Input} from '../../componentes/input';

import {Section} from '../../componentes/section';

import {Note} from '../../componentes/note';

export function Home(){
    return(
        <Container>
             <Brand>
                <h1>Boloco Notas</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title='Todos' $isactive/></li>
                <li><ButtonText title='React'/></li>
                <li><ButtonText title='Nodejs'/></li>
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