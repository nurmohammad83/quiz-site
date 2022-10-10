import React from 'react';

const Home = () => {
    return (
        <section className="bg-gray-500 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-5xl font-bold leading-none sm:text-5xl">POWER
			OF  YOUR <span className='text-orange-500 '>MIND</span>
		</h1>
		
		<div className="flex flex-wrap justify-center py-4">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-400 text-white">Get started</button>
			
		</div>
	</div>
</section>
    );
};

export default Home;