import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Row = ({ title, fetchURL }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then(response => setMovies(response.data.results));
	}, [fetchURL]);

	return (
		<>
			<h2 className='text-white font-bold md:text-xl p-8'>{title}</h2>
			<div className='relative flex items-center p-8'>
				<div id={'slider'}>
					{movies.map((item, id) => (
						<div className='w-[160px] sm:w-[300px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2'>
							<img
								src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
								alt={item?.title}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Row;
