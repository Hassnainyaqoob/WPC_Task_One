import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const questions = [
    {
      question_text: 'How many seconds are there in an hour ?',
      answer_options: [
        { answer_text: '2500', isCheck: false },
        { answer_text: '6900', isCheck: false },
        { answer_text: '3600', isCheck: true },
        { answer_text: '3000', isCheck: false },
      ],
    },
    {
      question_text: 'How many MB are in one GB ?',
      answer_options: [
        { answer_text: '2500 MB', isCheck: false },
        { answer_text: '1200 MB', isCheck: false },
        { answer_text: '280MB', isCheck: false },
        { answer_text: '1000 MB', isCheck: true },
      ],
    },
    {
      question_text: '3000 and 5600 are what ?',
      answer_options: [
        { answer_text: '8600', isCheck: true },
        { answer_text: '12000', isCheck: false },
        { answer_text: '1500', isCheck: false },
        { answer_text: '6700', isCheck: false },
      ],
    },
    {
      question_text: ' Where are the Burj Khalifa ?',
      answer_options: [
        { answer_text: 'America', isCheck: false },
        { answer_text: 'Dubai', isCheck: true },
        { answer_text: 'Spain', isCheck: false },
        { answer_text: 'Ingland', isCheck: false },
      ]
    },
    {
      question_text: 'Who is the capital of Pakistan?',
      answer_options: [
        { answer_text: 'Elon Mask', isCheck: false },
        { answer_text: 'Hassnain Yaqoob', isCheck: false },
        { answer_text: 'shahbaz shahreef', isCheck: false },
        { answer_text: 'Imran Khan', isCheck: true },
      ]
    }
  ];


  const [current_question, setcurrent_question] = useState(0);
  const [show_score, setShowScore] = useState(false);
  const [score, set_score] = useState(0);

  useEffect(() => {
    let final = localStorage.getItem("num")
    if (final > 4) {
      localStorage.setItem("num", 0)

    } else {
      let lastValue = parseInt(final)
      console.log("parseeeeinnnntttttt", lastValue);
      setcurrent_question(lastValue)
    }

  }, [])

  const handleAnswer_option = (isCheck) => {
    const next_question = current_question + 1;
    localStorage.setItem("num", next_question)

    isCheck && (
      set_score(score + 1)
    )
    next_question < questions.length ?
      setcurrent_question(next_question) : setShowScore(true)

  };

  return (

    <div id='all_Parent'>


      {show_score ? (
        <div className='score-div'>
          <h2 id="lastScore">

            You got {score} out of {questions.length} scores
          </h2>

        </div>

      )
        :
        (
          <div>
            <div >
              <div className='questionNumber'>
                <span>Question : {current_question + 1}</span>/{questions.length}
              </div>
              <div className='questionallDiv'>
                <spam className='questionAll' > {questions[current_question].question_text}</spam>
              </div>
            </div>
            <div className='button_div'>
              {questions[current_question].answer_options.map((answerMap, i) => (
                <Button sx={{ color: "black", borderColor: "black", width: "9%", borderRadius: 5 }} key={i} id='buttons_all' type="button" className="btn btn-outline-dark" onClick={() => handleAnswer_option(answerMap.isCheck, i)} variant="outlined">{answerMap.answer_text}</Button>
              ))}
            </div>
          </div>
        )}

    </div>
  );
}

export default App;
