// import styled from "styled-components";
import React, { useState, useEffect } from 'react';





const Game = () => {

    const [questions, setQuestions] = useState(false);
    const [questionNumber, setquestionNumber] = useState(0)

    useEffect(() => {
        if (!questions) {
            fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
            .then((response) => response.json())
            .then((data) => setQuestions(data));
        }
}//ask erik about how to write log catch errors with this^
    );

    return (
        <div>
                                         {/* why does ': ("")' need to be here---->\/ */}
           {questions ? ( <p>{JSON.stringify(questions.results[0].question)}</p>) : ("")}
           {/*        ^ <---ask erik why removing this 'question mark' gives an error */}

            {questions ? ( <button>{JSON.stringify(questions.results[0].incorrect_answers)}</button>) : ("")}
            
            {questions ? ( <button>{JSON.stringify(questions.results[0].correct_answer)}</button>) : ("")}

        </div>
    )
}

export default Game
