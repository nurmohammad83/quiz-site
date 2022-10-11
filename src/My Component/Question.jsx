import React from 'react';

import Option from './Option';
const Question = ({que}) => {
    const {options,question,correctAnswer}=que
    

    return (
        <>
        <div>
            <div className='border border-gray-500 m-14 p-5 bg-slate-200'>
                    <p className='text-xl font-medium text-center'>Quiz:{question}</p>
                    
                <div className='grid md:grid-cols-2 gap-6 p-5'>
                    {
                        options.map((option , index)=><Option
                         key={index} 
                         option={option}
                         correctAnswer={correctAnswer}
                         />)
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Question;