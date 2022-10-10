import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { Mycontext } from './Root';

const QuizQuestion = () => {
    const loadData = useContext(Mycontext)
    const question = loadData
    console.log(question);
    return (
        <div>
            <h1>{question.name}</h1>
        </div>
    );
};

export default QuizQuestion;