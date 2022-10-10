import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizQuestion = () => {
    const loadData = useLoaderData()
    const loadQuestion = loadData.data
    const {questions} = loadQuestion
    console.log(questions);
    return (
        <>
            <h1 className='text-black text-center text-5xl'>{loadQuestion.name}</h1>
        <div>
            {
              
                   
               questions.map(question=> <Question
               key={question.id}
               question={question}
               />)
            }
        </div>
        </>
    );
};

export default QuizQuestion;