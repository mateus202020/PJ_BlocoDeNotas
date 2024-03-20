import { Container } from "./style";

// eslint-disable-next-line react/prop-types
export function ButtonText({title, ativar = false, ...rest}){
    return(
        <Container
            type="button"
            $ativar={ativar}
            {...rest}
        >    
            {title}
        </Container>
    )
}