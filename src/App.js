import styled from 'styled-components';
import {Wrapper} from './wrapper.js';

const Title = styled.h1`
color: blue;
font-size: 12rem;
`;

const App = () => {
    return (
        <Wrapper>
            <Title>My Trivia App!</Title>
        </Wrapper>
    )
}

export default App
