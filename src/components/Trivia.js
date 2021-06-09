import react from "react";

const Trivia = ({ data: {question, correct_answer, incorrect_answers}, }) => (
    <div>
            <h2 dangerouslySetInnerHTML = {{ __html: question }} />
            <button dangerouslySetInnerHTML = {{ __html: incorrect_answers[0] }} />
            <button dangerouslySetInnerHTML = {{ __html: incorrect_answers[1] }} />
            <button dangerouslySetInnerHTML = {{ __html: incorrect_answers[2] }} />
            <button dangerouslySetInnerHTML = {{ __html: correct_answer }} />
            
    </div>
)

export default Trivia;