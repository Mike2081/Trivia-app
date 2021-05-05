// import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import axios from 'axios';




const Game = () => {

    const [questions, setQuestions] = useState(null);
    const [questionNumber, setquestionNumber] = useState(0)

    useEffect(() => {
        axiosGet();
    }, []);

    const axiosGet = () => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean`)
        .then(data => setQuestions(data));
    }

    if (!questions) return null; // empty render until we get data

//     useEffect(() => {
//         if (!questions) {
//             fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean')
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
// }//ask erik about how to write log catch errors with this^
//     );
    
    // let JSON.stringify(questions.results[0].incorrect_answers) 
    let myJSON = JSON.stringify();
    let a1 = myJSON(questions.results[0].incorrect_answers);
    

    return (
        <div>
                                         {/*   why does ': ("")' need to be here---->\/ */}
           {questions ? ( <p>{JSON.stringify(questions.results[0].question)}</p>) : ("")}

           <button>{}</button>

            
            {questions ? ( <button>{JSON.stringify(questions.results[0].correct_answer)}</button>) : ("")}

        </div>
    )
}

export default Game
