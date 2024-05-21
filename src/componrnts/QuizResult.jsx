import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
      <div className="score"> Your Score:{props.score}</div> 
       <div className="total">Total Score:{props.totalScore}</div> 
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult
