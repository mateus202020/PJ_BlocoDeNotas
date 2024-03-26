import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../componentes/Header';
import { Container, Form } from './style'
import { Input } from '../../componentes/input';
import { Textarea } from '../../componentes/Textarea';
import { NoteItem } from '../../componentes/NoteItem';
import { Section } from '../../componentes/section';
import { Button } from '../../componentes/button';
import { Link } from 'react-router-dom';
import { api}  from "../../services/api";


export function New(){
    const [links, setLinks] = useState([]); 
    const [newLink, setNewLink] = useState(""); 

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

  
    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemove(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemovTag(deleted){
        setTags(prevState => prevState.filter(link => link !== deleted))
    }

    async function handleNewNote(){

        if(!title){
            return alert("Digite o título da nota");
        }

        if(!newTag){
            return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vázio.")
        }

        if(newLink){
            return alert("Você deixou uma link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });
        
        alert("Nota criada com sucesso!");
        navigate("/");

    }
    
    return (
        <Container>
            <Header/>
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input 
                    placeholder= "Título"
                    onChange={e => setTitle(e.target.value)}
                    />
                    
                    <Textarea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {links.map((link, index) =>(
                            <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemove(link)}
                            />
                        ))}
                        <NoteItem
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>
                    
                    <Section title="Marcadores">
                        <div className='tags'>
                           {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemovTag(tag)}
                                />
                            ))
                           }

                           <NoteItem
                            isNew
                            placeholder="Nova tag"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                           />
                        </div>
                    </Section>

                    <Button 
                        title="Salvar" 
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container >
    )
}
