// import styled from "styled-components";


const Game = () => {

    const fetchItems = async () => {
        const data = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean');
        const items = await data.json();
        console.log(items);
    };
    fetchItems();
    return (
        <div>
            question 1
        </div>
    )
}

export default Game
