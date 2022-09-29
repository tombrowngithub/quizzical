import React, {useEffect} from "react";

export default function Question_page(props) {

    const [Answer, setAnswer] = React.useState(null)
    const [className, setClassName] = React.useState(null)
    const [AvailableAnswer] = React.useState([...props.data.incorrect_answers, props.data.correct_answer].sort(() => Math.random() - 0.5))

    const answerOptions = AvailableAnswer.map(answer => {

        return (<button
            className={Answer === answer ? className : props.defaultState}
            onClick={() => holdAnswer(answer)}>
            {answer}
        </button>)
    })


    function holdAnswer(value) {
        setAnswer(value)
        //setClassName("active")
        props.setCheckAnswer(value)

        value === props.data.correct_answer ?
            setClassName(props.classNameCorrect) :
            setClassName(props.classNameWrong)
    }

    return (
        <div className="main-question-container">
            <div className="question">
                <h3>{props.data.question}</h3>
            </div>

            <div className="question-button-container">
                {answerOptions}
            </div>
        </div>
    )

}
