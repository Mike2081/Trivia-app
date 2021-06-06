// import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';




const Game = () => {

    const [questions, setQuestions] = useState(false);
    const [questionNumber, setquestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [choices, setChoices] = useState([]);
    const [holder, setHolder] = useState([]);
    
    
    useEffect(() => {
        if (!questions) {
            fetch('https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple')
            .then((response) => response.json())
            .then((data) => setQuestions(data));
        }
    }, []);//ask erik about how to write log catch errors with this^

    useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(json => {
      setHolder([json]);
  })
},[])
    
    const scorePlus = () => {
        setScore(score + 1);
        setquestionNumber(questionNumber + 1);
    }// adds one point to score board and moves on to next question

    const scoreMinus = () => {
        setScore(score - 1);
        setquestionNumber(questionNumber + 1);
    }// subtracts one point to score board and moves on to next 

    useEffect(() => {
       console.log(questions)
    });//remove this once you finish the component

    useEffect(() => {
       console.log(holder)
    });//remove this once you finish the component
    

    if (questionNumber < 11) {//if questionNumber is less than 11 show questions else show end game and final score
    return (
        <div>
           
            {questions ? ( <p>{JSON.stringify(questions.results[questionNumber].question)}</p>) : ("")} {/*this is a ternary operator 'question ?' <-- meaning: is 'question' true? if so ( : )than do what inside the "" */}

            {questions ? ( <button onClick={() => scoreMinus() }>{JSON.stringify(questions.results[questionNumber].incorrect_answers[0])}</button>) : ("")}
        
            {questions ? ( <button onClick={() => scoreMinus() }>{JSON.stringify(questions.results[questionNumber].incorrect_answers[1])}</button>) : ("")}

            {questions ? ( <button onClick={() => scoreMinus() }>{JSON.stringify(questions.results[questionNumber].incorrect_answers[2])}</button>) : ("")}
            
            {questions ? ( <button onClick={() => scorePlus() }>{JSON.stringify(questions.results[questionNumber].correct_answer)}</button>) : ("")}

            <div>Score: {score}</div>

        </div>
        )
    }
    else {
      return (
            <div>
                <div>end game</div>
                <div>Score: {score}</div>
                <Link to={'/'}>
                <button>Try again</button>
            </Link>
            </div>
            
      )
    }

}

export default Game
