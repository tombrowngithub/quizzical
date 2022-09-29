import React from "react";
import {Link} from "react-router-dom"

export default function Start() {
    const [count, setCount] = React.useState(0)

    function callAPIData() {
        setCount(count + 1)
    }
    return (
        <div className="start-container">
            <div className="container">
                <h2>Quizzical</h2>
                <p>Take part in the amazing quiz, test your knowledge and train your brain!</p>
                <p> Click the button below start.</p>

                <Link to="/question" onClick={callAPIData}>
                    <button >Start quiz</button>
                </Link>
            </div>


        </div>
    )
}
