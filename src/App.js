import styled from 'styled-components';
import {Wrapper} from './wrapper.js';

const Title = styled.h1`
color: white;
font-size: 9rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:300;
`;

const Container = styled.div`
background:#8f67d2;
width: 61vw;

`;

const App = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Test Your Trivia Knowledge!</Title>
            </Container>
        </Wrapper>
    )
}

export default App
