import { Container, Form } from "./style";

import { useState } from "react";

import {Header} from '../../componentes/Header';

import {Input} from '../../componentes/input';

import { Textarea } from "../../componentes/Textarea";

import { NoteItem } from "../../componentes/NoteItem";

import {Section} from "../../componentes/section";

import { Button } from "../../componentes/button";

import {Link} from 'react-router-dom';

export function New(){

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
      }

      function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
      }

      function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
      }

      function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(link => link !== deleted));
      }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>

                    <Input placeholder='Título'/>

                    <Textarea placeholder='Observações'/>

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => {handleRemoveLink(link)}}
                                />
                            ))
                        }
                       
                        <NoteItem
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title='Marcadores'>
                        <div className="tags">
                           {
                            tags.map((tag, index) => (
                                <NoteItem 
                                key={String(index)}
                                value={tag}
                                onClick={() => {handleRemoveTag(tag)}}
                                />
                            ))
                           }
                            <NoteItem 
                                isNew 
                                placeholder='Novo tag'
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                                />            
                        </div>           
                    </Section>

                    <Button title='Salvar'/>

                </Form>
            </main>

        </Container>
    )
}