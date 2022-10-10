import React from 'react';

const QuizCatagory = ({quiz}) => {
    const {name, logo,total}=quiz
    return (
        <div className=" rounded-md shadow-md bg-slate-200 dark:text-gray-100">
	<img src={logo} alt="" className=" w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<p className="dark:text-gray-100">Total: {total}</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-white">Read more</button>
	</div>
</div>
    );
};

export default QuizCatagory;