import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="p-4 bg-gray-600 text-gray-100">
	<div className="container relative flex justify-between h-16 mx-auto">
		<h1 className='text-2xl pt-4 font-medium'><span className='text-orange-500 '>Quiz</span> <span>Store</span></h1>
		<ul className="items-stretch  md:space-x-3 flex">
			<li className="flex">
				<Link rel="noopener noreferrer" to='/' className="flex items-center  text-xs md:text-base  lg:text-base px-2 md:px-4  -mb-1  dark:border-transparent">Home</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to='/category' className="flex items-center text-xs md:text-base  lg:text-base md:px-4 -mb-1 dark:border-transparent">Category</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to='/statistics' className="flex items-center text-xs md:text-base  lg:text-base px-4 -mb-1  dark:border-transparent dark:text-violet-400 dark:border-violet-400">Statistics</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" to='/blog' className="flex items-center text-xs md:text-base  lg:text-base px-4 -mb-1 dark:border-transparent">Blog</Link>
			</li>
		</ul>
		{/* <button className=" p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button> */}
	</div>
</header>
    );
};

export default Nav;