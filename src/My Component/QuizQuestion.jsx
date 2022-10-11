
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizQuestion = () => {
    const loadData = useLoaderData()
    const loadQuestion = loadData.data
    const {questions} = loadQuestion
    const [rightCount , setRightCount]= useState(0)
    const [Wrong ,setWrongCount]= useState(0)
    return (
        <>
            <h1 className='text-black text-center mt-4 text-5xl'>{loadQuestion.name}</h1>

            <h1 className='text-xl'>Correct Answer: {rightCount}</h1>
            <h1 className='text-xl'>Worang  Answer: {Wrong}</h1>
        <div>
            {
              
                   
              questions.map(question=> <Question
               key={question.id}
               que={question}
               setRightCount={setRightCount}
               setWrongCount={setWrongCount}
               />)
            }
        </div>
        </>
    );
};

export default QuizQuestion;