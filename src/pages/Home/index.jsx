import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import { useNavigate } from 'react-router-dom';

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
    const [tagSelect, setTagSelect] = useState([]);

    const [search, setSearch] = useState("");
    const [notas, setNotas] = useState([ ]);

    const navigate = useNavigate();

    function handleTagSelected(tagName){

        if(tagName === "all"){
            return setTagSelect([]);
        }

        const alreadySelectd = tagSelect.includes(tagName);

        if(alreadySelectd){
            const filteredTags = tagSelect.filter(tag => tag !== tagName);

            setTagSelect(filteredTags);
        }else{
            setTagSelect(prevState => [...prevState, tagName]);
        }
    }

    function handleDetails(id){
        navigate(`/App/${id}`);
    }



    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags();

    },[]);

    useEffect(() => {
        async function fetchNotes() {
          const response = await api.get(`/notes?title=${search}`);
          setNotas(response.data);
        }
        fetchNotes();
    
      }, [setSearch, search]);

    return(
        <Container>
             <Brand>
                <h1>Boloco Notas</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText 
                        title='Todos' 
                        onClick={() => handleTagSelected("all")} 
                        $isactive={tagSelect.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagSelect.includes(tag.name)}
                            />
                            </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título" 
                icon={FiSearch} 
                onChange={(e) => setSearch(e.target.value)}
                />
            </Search>
               
            <Content>
                <Section title="Minhas notas">
                    {
                        notas.map(note => (
                            <Note
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus/>
                    Criar Nota
            </NewNote>

        </Container>
    )
}