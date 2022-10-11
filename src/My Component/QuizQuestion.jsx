import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizQuestion = () => {
    const loadData = useLoaderData()
    const loadQuestion = loadData.data
    const {questions} = loadQuestion
    
    return (
        <>
            <h1 className='text-black text-center text-5xl'>{loadQuestion.name}</h1>
        <div>
            {
              
                   
              questions.map(question=> <Question
               key={question.id}
               que={question}
               />)
            }
        </div>
        </>
    );
};

export default QuizQuestion;