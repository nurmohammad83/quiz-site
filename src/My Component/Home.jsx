import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';


const Home = () => {
  
    
    return (
        <>
        <section className="dark:text-gray-100 bg-white">
		<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1665470948~exp=1665471548~hmac=ac4219bfa71b34c6c39b08d8ebc50515a5fb4b06d31c4282b1161651f0501198" alt="" className=" h-72 sm:h-80 lg:h-96 xl:h-[500px] bg-slate-50 pl-20 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">POWER OF YOUR
				<span className="text-violet-400"> MIND</span>
			</h1>
			
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<Link rel="noopener noreferrer" to='/category' className="px-8 py-3 text-lg bg-emerald-600 mt-4 font-semibold border text-white rounded dark:border-gray-100">GET STARTS</Link>
			</div>
		</div>
	</div>
</section>
</section>
<hr  className='mx-10 font-semibold my-6 border border-orange-700'/>
<section>
	<h1 className='text-center text-4xl text-red-500 font-bold font-mono'>All Question Topic</h1>
    <Category/>
</section>
</>
    );
};

export default Home;