import styled from "styled-components";

import {Link} from 'react-router-dom';

export const Container = styled.div`
        width: 100%;
        height: 100vh;

        display: grid;
        grid-template-columns: 250px auto;
        grid-template-rows: 105px 128px auto 64px;
        grid-template-areas:
        "brand header"
        "menu search"
        "menu content"
        "newnote content";

        background-color: ${({theme}) => theme.COLORS.background_200};
`;

export const Brand = styled.div`
        grid-area: brand;

        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme}) => theme.COLORS.background_300};
        background-color: ${({theme}) => theme.COLORS.background_100};

        > h1{
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.purple_light};
        }


`; 

export const Menu = styled.ul`
        grid-area: menu;
        background-color: ${({theme}) => theme.COLORS.background_100};

        padding-top: 64px;
        text-align: center;

        >li{
            margin-bottom: 24px
        }

`; 

export const Search = styled.div`
        grid-area: search;
        grid-area: search;
        padding: 64px 64px 0;

`;

export const Content = styled.div`
        grid-area: content;
        padding: 0 64px ;
        overflow-y: auto;


`; 

export const NewNote = styled(Link)`
        grid-area: newnote;

        background-color: ${({theme}) => theme.COLORS.purple_light};
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        svg{
        margin-right: 8px;
        }   

`;
