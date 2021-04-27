import styled from "styled-components";
import {Wrapper} from './Wrapper.js';
import {StartButton} from './StartButton';
import {Link} from 'react-router-dom';

const Container = styled.div`
background:#8f67d2;
width: 57em;
height: 20em;
margin: 4rem 0rem 0rem 17rem;
@media (max-width: 1185px){
    margin: 4rem 0rem 0rem 8rem;
}
@media (max-width: 1040px){
    margin: 4rem 0rem 0rem 4rem;
}
@media (max-width: 976px){
    width: 46em;
    margin: 4rem 0rem 0rem 6rem;
}
@media (max-width: 832px){
    width: 34em;
    margin: 4rem 0rem 0rem 9rem;
}
@media (max-width: 832px){
    width: 29em;
    height:11em;
}
@media (max-width: 831px){
    height:15em;
}
@media (max-width: 600px){
    margin: 4rem 0rem 0rem 4.5rem;
}
@media (max-width: 500px){
    margin: 4rem 0rem 0rem 1rem;
}
@media (max-width: 432px){
    width: 22em;
    height:8em;
    margin: 4rem 0rem 0rem 2.5rem;
}
@media (max-width: 340px){
    width: 15.5em;
}
@media (min-width: 1375px){
    margin: 4rem 0rem 0rem 18rem;
}
@media (min-width: 1560px){
    margin: 4rem 0rem 0rem 20rem;
}
@media (min-width: 1615px){
    margin: 4rem 0rem 0rem 23rem;
}
@media (min-width: 1700px){
    margin: 4rem 0rem 0rem 26rem;
}
@media (min-width: 1725px){
    margin: 4rem 0rem 0rem 29rem;
}
@media (min-width: 1920px){
    margin: 4rem 0rem 0rem 33rem;
}
`;


const Title = styled.h1`
color: white;
font-size: 8rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight:300;
margin: 0rem 0rem 0rem 5rem;
@media (max-width:976px){
    font-size:6rem;
}
@media (max-width:832px){
    font-size:4rem;
}
@media (max-width:689px){
    margin:0rem 0rem 0rem 2rem;
}
@media (max-width:432px){
    font-size:3rem;
}
@media (max-width:340px){
    font-size:2rem;
    margin:0rem 0rem 0rem 1.5rem;
}
`;

const Start = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Test Your Trivia Knowledge!</Title>
            </Container>
            <Link to={'/game'}>
                <StartButton>Start</StartButton>
            </Link>
        </Wrapper>
    )
}

export default Start
