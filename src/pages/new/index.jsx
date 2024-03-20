import { Container, Form } from "./style";

import {Header} from '../../componentes/Header';

import {Input} from '../../componentes/input';

import { Textarea } from "../../componentes/Textarea";

import { NoteItem } from "../../componentes/NoteItem";

import {Section} from "../../componentes/section";

import { Button } from "../../componentes/button";

import {Link} from 'react-router-dom';

export function New(){
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
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem novo placeholder="Novo link"/>
                    </Section>

                    <Section title='Marcadores'>
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem novo placeholder='Novo tag'/>            
                        </div>           
                    </Section>

                    <Button title='Salvar'/>

                </Form>
            </main>

        </Container>
    )
}