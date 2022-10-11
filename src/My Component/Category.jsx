import React, { useContext } from 'react';
import QuizCatagory from './QuizCatagory';

import { Mycontext } from './Root';
const Category = () => {
    const quizs = useContext(Mycontext)
    return (
        <>
        <div className='grid md:grid-cols-2 gap-5 p-20'>
    {
        quizs.map(quiz=> <QuizCatagory
        key={quiz.id}
        quiz={quiz}
        />)
    }
</div>
</>
    );
};

export default Category;