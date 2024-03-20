import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.background_300};
    border: none;
    border-radius: 10px;
    padding: 22px;
    margin-bottom: 16px;

    > h1{
        flex:1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.white};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 64px ;
    overflow-y: auto;

`;