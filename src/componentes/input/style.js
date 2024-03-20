import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme}) => theme.COLORS.background_100};
    color: ${({ theme}) => theme.COLORS.gray_300};

    margin-bottom: 8px;
    border-radius: 10px;

    >input{
        height:  56px;
        width:  100%;

        padding: 12px;
        color: ${({ theme}) => theme.COLORS.white};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.gray_300};
        }

        >svg{
            margin-left:  16px;
        }
    }


`;