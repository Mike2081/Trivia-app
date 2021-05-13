// import styled from "styled-components";
import React, { useState, useEffect } from 'react';




const Game = () => {

    const [questions, setQuestions] = useState(false);
    const [questionNumber, setquestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const scorePlus = () => {
        setScore(score + 1);
    }

    const scoreMinus = () => {
        setScore(score - 1);
    }

    const nextQuestion = () => {
        setquestionNumber(questionNumber + 1);
    }
 

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
    


    return (
        <div>
           
            {questions ? ( <p>{JSON.stringify(questions.results[questionNumber].question)}</p>) : ("")} {/*this is a ternary operator 'question ?' <-- meaning: is 'question' true? if so ( : )than do what inside the "" */}

            {questions ? ( <button onClick={() => scoreMinus() }>{JSON.stringify(questions.results[questionNumber].incorrect_answers[0])}</button>) : ("")}
        
            {questions ? ( <button onClick={() => scoreMinus() }>{JSON.stringify(questions.results[questionNumber].incorrect_answers[1])}</button>) : ("")}

            {questions ? ( <button onClick={() => scoreMinus() }>{JSON.stringify(questions.results[questionNumber].incorrect_answers[2])}</button>) : ("")}
            
            {questions ? ( <button onClick={() => scorePlus() }>{JSON.stringify(questions.results[questionNumber].correct_answer)}</button>) : ("")}

            <button onClick={() => nextQuestion() }>Next Question</button>

            <div>Score: {score}</div>

        </div>
    )
}

export default Game
