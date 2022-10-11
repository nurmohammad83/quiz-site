import React from 'react';
import { Link } from 'react-router-dom';


const QuizCatagory = ({quiz}) => {
    const {name,id, logo,total}=quiz
    
    return (
        <div className=" rounded-md shadow-md bg-slate-200 dark:text-gray-100">
	<img src={logo} alt="" className=" w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl  font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-100">Total Question: {total}</p>
		</div>
		
        <Link to={`/quiz/${id}`}>
        <button  type="button" className="flex items-center justify-center w-full p-3 hover:bg-orange-400 font-semibold tracking-wide rounded-md bg-violet-500 text-white">Start Quiz</button>
        </Link>
	</div>
</div>
    );
};

export default QuizCatagory;