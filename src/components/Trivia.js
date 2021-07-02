
const Trivia = ({ handleAnswer, data: { question, correct_answer, incorrect_answers },
}) => {



    const shufflingAnswers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    return (
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {shufflingAnswers.map((answer) => (
                    <button
                        onClick={() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{ __html: answer }}>
                    </button>
                ))}
            </div>

        </div>
    )
};

export default Trivia;