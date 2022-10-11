import React from 'react';
import { Link } from 'react-router-dom';

const Question = ({que}) => {
    const {options,id,question}=que
    console.log(que);
    return (
        <>
        <div>
            <div className='border border-gray-500 m-9 bg-slate-400'>
                    <p className='text-xl font-medium text-center'>Quiz:{question}</p>
                <div className='grid md:grid-cols-2 p-4'>
                <Link><p className='border border-red-700 p-5 m-2 text-center'>{options[0]}</p></Link>
                <Link><p className='border border-red-700 p-5 m-2 text-center'>{options[1]}</p></Link>
                <Link><p className='border border-red-700 p-5 m-2 text-center'>{options[2]}</p></Link>
                <Link><p className='border border-red-700 p-5 m-2 text-center'>{options[3]}</p></Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Question;