import NavBar from "./components/NavBar";
import Start from "./components/Start_page";
import QuestionPage from "./components/Question_page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React, {useEffect} from "react";
import axios from "axios";


export default function App() {
    const [classNameCorrect, setClassNameCorrect] = React.useState("active")
    const [classNameWrong, setClassNameWrong] = React.useState("active")
    const [defaultState, setDefaultState] = React.useState("question-button")
    const [checkAnswer, setCheckAnswer] = React.useState()


    const [TriviaApiData, setTriviaApiData] = React.useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/results")
            .then(res => {
                setTriviaApiData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const QuestionPageElement = TriviaApiData.map((data, index) => {
        return (
            <QuestionPage
                key={index}
                data={data}

                defaultState={defaultState}
                classNameCorrect={classNameCorrect}
                classNameWrong={classNameWrong}
                setCheckAnswer={setCheckAnswer}
                handleClicked={handleClicked}
            />
        )
    })

    function handleClicked() {

        setClassNameCorrect("correct")
        setClassNameWrong("wrong")

        console.log(classNameCorrect)
        console.log(classNameWrong)

    }


    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Start/>}/>
                <Route path="/question" element={
                    <div>
                        {QuestionPageElement}
                        <div className="check-answer-container">
                            <button
                                onClick={handleClicked}
                                className="check-answer">Check answer
                            </button>
                        </div>
                        <hr/>
                    </div>

                }/>}/>
            </Routes>
        </Router>
    );
}


