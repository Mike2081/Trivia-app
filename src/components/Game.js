// import styled from "styled-components";
import React, { useState, useEffect } from 'react';




const Game = () => {

    const [questions, setQuestions] = useState(null);
    const [questionNumber, setquestionNumber] = useState(0)


    useEffect(() => {
        if (!questions) {
            fetch('https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple')
            .then((response) => response.json())
            .then((data) => setQuestions(data));
        }
}//ask erik about how to write log catch errors with this^
    );

    useEffect(() => {
       console.log(questions)
    });
    
    let answer1 = questions.map(item => {
        return {
            answer: item.results[0].correct_answer
        }
    });

    return (
        <div>
           
            {questions ? ( <p>{JSON.stringify(questions.results[0].question)}</p>) : ("")} {/*this is a ternary operator 'question ?' <-- meaning: is 'question' true? if so ( : )than do what inside the "" */}

             <button></button>

            
            {questions ? ( <button>{JSON.stringify(questions.results[0].correct_answer)}</button>) : ("")}

        </div>
    )
}

export default Game
