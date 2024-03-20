import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './style';

// eslint-disable-next-line react/prop-types
export function NoteItem({novo, valor, click, ...rest}){
    return(
        <Container>
            <input
                type="text"
                value={valor}
                readOnly={!novo}
                {...rest}
            />

            <button
                type='button'
                onClick={click}
                className={novo ? 'button-add' : 'button-delete'}
            >
                {novo ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}