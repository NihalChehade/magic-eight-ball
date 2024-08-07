import React, {useState} from 'react'
import './EightBall.css'


const EightBall = ({answers}) => {
  const genAnswer =() =>Math.floor(Math.random() * answers.length);
  const [answer, setAnswer] = useState({msg:'Think of a Question', color:'black'});

  const reply = answers[genAnswer()];

  return (
    <div className='ball' onClick={()=>{setAnswer(reply)}} style={{backgroundColor: answer.color }}>{answer.msg}</div>
  )
}

export default EightBall