// import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Trivia from "./Trivia";

const API_URL = 'https://opentdb.com/api.php?amount=11&category=9&difficulty=easy&type=multiple' ;

const Game = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            setQuestions(data.results);
            console.log(data)
        });
    }, []);

    return questions.length > 0 ? (
        <div>
            <Trivia data = {questions[0]} />
        </div>
    ) : (
        <h1>loading</h1>
    );
}

export default Game

