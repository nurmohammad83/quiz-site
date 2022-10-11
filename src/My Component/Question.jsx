import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


import Option from './Option';
const Question = ({que}) => {
    const {options,question,correctAnswer}=que
    const [ans, setAns]= useState(correctAnswer)
    const seeAnswer=()=>{
        setAns(correctAnswer)
        toast(`${ans}`, {autoClose: 2000})
    }

    return (
        <>
        <div>
            <div className='border shadow-xl  m-14 p-5 bg-slate-200'>
                    <div className='flex items-center justify-center relative'>
                    <p className='text-xl text-orange-500 font-mono w-2/3 font-medium text-center'>{question}</p>
                   <button onClick={seeAnswer} className='absolute lg:md:right-12  top-[0.5rem] right-0'> <FontAwesomeIcon  icon={faEye}/>
                   </button>
                    </div>
                <div className='grid md:grid-cols-2 gap-6 p-5 font-serif'>
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