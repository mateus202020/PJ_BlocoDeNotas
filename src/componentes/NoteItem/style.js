import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, novo }) => novo ? "transparent" : theme.COLORS.background_100};
    color:  ${({ theme }) =>  theme.COLORS.gray_300};

    border: ${({ theme, novo }) => novo ? `1px dashed  ${theme.COLORS.gray_300}` : "none"};

    margin-bottom: 0.5rem;
    border-radius: 10px;
    padding-right: 1rem;


    >button{
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.red};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.yellow_pale};
    }

    > input{
        width: 100%;
        
        height: 3.5rem;

        padding: 0.75rem;

        color: ${({theme}) => theme.COLORS.white};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.gray_300};
        }
    }
`;