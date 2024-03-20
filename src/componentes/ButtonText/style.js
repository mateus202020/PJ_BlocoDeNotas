import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({theme, ativar}) => ativar ? theme.COLORS.purple_light :theme.COLORS.gray_300};
    
    border: none;
    font-size: 16px;

`