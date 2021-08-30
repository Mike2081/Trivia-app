// import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Trivia from "./Trivia";

const API_URL = 'https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple';

const Game = () => {

    const [question, setQuestions] = useState([]);
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

        if (answer === question[currentIndex].correct_answer) {
            setScore(score + 1);
        }
    };
    // create this exact thing^^ but for incorrect answer but while changing the color button to red^^^
        
    return question.length > 0 ? (
                <div>
                    {currentIndex >= 10 ? (
                    <div>
                        <h1>
                            Your score: {score}/10
                        </h1>
                        <Link to={'/'}>
                            <button>
                                Try again
                            </button>
                        </Link>
                    </div>    
                    ) : (
                        <div>
                            <Trivia data={question[currentIndex]} handleAnswer={handleAnswer} />
                            <div>Score: {score}</div>
                        </div>
                    )}
                </div>
            ) : (
                <div> error loading! </div>
            )       
    
}

export default Game

