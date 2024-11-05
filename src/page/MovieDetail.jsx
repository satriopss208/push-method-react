import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logoMdiv from '../assets/LogoTugasDibimbingL.png';
import { FaStar } from "react-icons/fa6";

const MovieDetail = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    

    useEffect(() => {
        const getMovie = async () => {

            const url = `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=image&language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjRjZWJhOTA5YjVmMGU5ZTRmOWNkYmRkNDY3NzRjYyIsIm5iZiI6MTczMDQ1MDY4MS44NDY2Mjg3LCJzdWIiOiI2MDUzMjMzNTlhNjRjMTAwNTE0NzQwYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kdhU3psi-FFTrW3Pv-AUO5Wls7XyhswIG4pb50qZRnw'
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                setMovie(data);

            } catch (error) {
                console.error("Failed to get data", error);

            }
        }

        getMovie();
    }, [movieId]);


    return (
        <div>
            <div className='h-screen
                      bg-cover 
                      bg-center
                      flex
                      flex-col
                      items-start
                      justify-start
                      p-5'
                style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w1280/${movie.backdrop_path})` }}>
                <div className="absolute 
                                inset-0 
                                bg-gradient-to-t from-[#000000] from-10%"></div>
                <div className='flex 
                                mx-10 
                                px-5 
                                justify-between 
                                gap-3 
                                items-center 
                                z-10 
                                w-auto'>
                    <Link to={"/home"}>
                        <img src={logoMdiv} alt="Logo" className='w-48' />
                    </Link>
                </div>
                <div className='flex 
                                flex-col 
                                items-start 
                                justify-end 
                                h-full 
                                mx-10 
                                px-5 
                                pb-10
                                z-10 
                                text-[#FFFFFF]'>
                    <p className='bg-azure-radiance-500 p-1 rounded-md text-[10pt]'>ID : {movie.id}</p>
                    <div className='flex items-center justify-center text-center gap-5 mt-1'>
                    <p className='flex items-center font-serif text-2xl text-[#cccccc]'>
                        R.A : {Math.floor(movie.vote_average*100)/100} / {movie.vote_count}
                    </p>
                    <p className='flex items-center font-serif text-2xl text-[#cccccc]'>
                        <FaStar className='text-[#FFE700] text-xl mr-1'/>
                        {movie.popularity} 
                    </p>
                    </div>
                    <p className='max-w-[600px] text-3xl pb-3'>{movie.title}</p>
                    <p className='max-w-[800px] text-[12pt]'>{movie.overview}</p>
                </div>

            </div>
        </div>
    )
}

export default MovieDetail