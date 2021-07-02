// import styled from "styled-components";
import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import Trivia from "./Trivia";

const API_URL = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple';

const Game = () => {

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.results);
                console.log(data)
            });
    }, []);

    const handleAnswer = (answer) => {
        setCurrentIndex(currentIndex + 1);

        if (answer === questions[currentIndex].correct_answer) {
            setScore(score + 1);
        }
    };

    return questions.length > 0 ? (
        <div>
            <Trivia data={questions[currentIndex]} handleAnswer={handleAnswer} />
            <div>Score: {score}</div>
        </div>
    ) : (
        <h1>loading</h1>
    );
}

export default Game

