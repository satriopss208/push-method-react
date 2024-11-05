import React, { useEffect, useState } from 'react'
import logoMdiv from '../assets/LogoTugasDibimbingL.png';
import userPhoto from '../assets/userEdit.png'
import { Link, useNavigate } from 'react-router-dom';


const HomePage = () => {

    const [username, setUsername] = useState("");
    const [backdrop, setBackdrop] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [trendData, setTrendData] = useState([]);
    const [westernMovies, setWesternMovies] = useState([]);
    const [animeMovies, setAnimeMovies] = useState([]);
    const [asianMovies, setAsianMovies] = useState([]);
    const navigate = useNavigate();

    const handlePoster = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + ' ...' : text;
    };

    useEffect(() => {

        const getDataUser = async () => {
            const url = 'https://api.themoviedb.org/3/account/10237177';
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
                if (data.username) {
                    setUsername(data.username);
                    console.log(data.username);

                }

            } catch (error) {
                console.error("Failed to get data", error);

            }

        }

        const getDataHero = async () => {
            const url = 'https://api.themoviedb.org/3/movie/122917?append_to_response=image&language=en-US';
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
                if (data.backdrop_path) {
                    setBackdrop(`http://image.tmdb.org/t/p/w1280/${data.backdrop_path}`);
                    //console.log(`http://image.tmdb.org/t/p/w1280/${data.backdrop_path}`);
                }

                if (data.original_title) {
                    setTitle(data.original_title);
                }

                if (data.overview) {
                    setDescription(data.overview);
                }

            } catch (error) {
                console.error("Failed to get data", error);

            }


        };

        const getDataPopular = async () => {
            const url = 'https://api.themoviedb.org/3/account/10237177/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
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
                const trendingData = [];
                if (data.results.length !== 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        const movie = {
                            id: data.results[i].id,
                            title: data.results[i].title,
                            poster_path: `http://image.tmdb.org/t/p/w1280/${data.results[i].poster_path}`,
                            vote_average: data.results[i].vote_average,
                            release_year: new Date(data.results[i].release_date).getFullYear(),
                            original_language: data.results[i].original_language
                        };
                        trendingData.push(movie);
                    }
                    trendingData.sort((a, b) => b.popularity - a.popularity);
                    console.log(trendingData);
                    setTrendData(trendingData.slice(0, 10));


                } else {
                    console.log("No Movies Found!");

                }

            } catch (error) {
                console.error("Failed to get data", error);

            }
        };

        const getDataWestern = async () => {
            const url = 'https://api.themoviedb.org/3/account/10237177/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
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
                const westernData = [];
                if (data.results.length !== 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        if (data.results[i].original_language === "en") {
                            const movie = {
                                id: data.results[i].id,
                                title: data.results[i].title,
                                poster_path: `http://image.tmdb.org/t/p/w1280/${data.results[i].poster_path}`,
                                vote_average: data.results[i].vote_average,
                                original_language: data.results[i].original_language
                            };
                            westernData.push(movie);
                        }

                    }
                    westernData.sort((a, b) => b.vote_average - a.vote_average);
                    console.log(westernData);
                    setWesternMovies(westernData);


                } else {
                    console.log("No Movies Found!");

                }

            } catch (error) {
                console.error("Failed to get data", error);

            }
        };

        const getDataAnime = async () => {
            const url = 'https://api.themoviedb.org/3/account/10237177/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
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
                const animeData = [];
                if (data.results.length !== 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        if (data.results[i].original_language === "ja") {
                            const movie = {
                                id: data.results[i].id,
                                title: data.results[i].title,
                                poster_path: `http://image.tmdb.org/t/p/w1280/${data.results[i].poster_path}`,
                                vote_average: data.results[i].vote_average,
                                original_language: data.results[i].original_language
                            };
                            animeData.push(movie);
                        }

                    }
                    animeData.sort((a, b) => b.vote_average - a.vote_average);
                    console.log(animeData);
                    setAnimeMovies(animeData);


                } else {
                    console.log("No Movies Found!");

                }

            } catch (error) {
                console.error("Failed to get data", error);

            }
        };

        const getDataAsian = async () => {
            const url = 'https://api.themoviedb.org/3/account/10237177/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
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
                const asianData = [];
                if (data.results.length !== 0) {
                    for (let i = 0; i < data.results.length; i++) {
                        if (data.results[i].original_language === "ko" || data.results[i].original_language === "id") {
                            const movie = {
                                id: data.results[i].id,
                                title: data.results[i].title,
                                poster_path: `http://image.tmdb.org/t/p/w1280/${data.results[i].poster_path}`,
                                vote_average: data.results[i].vote_average,
                                original_language: data.results[i].original_language
                            };
                            asianData.push(movie);
                        }

                    }
                    asianData.sort((a, b) => b.vote_average - a.vote_average);
                    console.log(asianData);
                    setAsianMovies(asianData);


                } else {
                    console.log("No Movies Found!");

                }

            } catch (error) {
                console.error("Failed to get data", error);

            }
        };

        getDataUser();
        getDataHero();
        getDataPopular();
        getDataWestern();
        getDataAnime();
        getDataAsian();
    }, []);



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
                style={{ backgroundImage: `url(${backdrop})` }}>
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
                    <Link to={""}>
                        <img src={logoMdiv} alt="Logo" className='w-48' />
                    </Link>
                    <div className='flex 
                                    items-center 
                                    justify-between 
                                    w-[1000px] 
                                    bg-[#000d289f] 
                                    rounded-full 
                                    py-1 
                                    px-3'>
                        <div className='flex gap-6 pl-3 text-[#FFFFFF]'>
                            <a href="#trend" className=' text-lg font-semibold'> Now Trending</a>
                            <a href="#anime" className='text-lg font-semibold'> Anime</a>
                            <a href="#asian" className='text-lg font-semibold'> Asian</a>
                            <a href="#western" className='text-lg font-semibold'> Western</a>
                        </div>
                        <div className='flex 
                                        items-center 
                                        gap-10 
                                        p-2 
                                        w-98 
                                        justify-between'>
                            <button className='text-md 
                                               font-semibold 
                                               text-[#FFFFFF] 
                                               bg-azure-radiance-500 
                                               p-2 
                                               rounded-lg'>Movie List</button>
                            <p className='text-lg font-semibold text-[#FFFFFF]'>Hi, {username}!</p>
                            <img src={userPhoto} alt="user icon" className='w-12' />
                        </div>
                    </div>
                </div>
                <div className='flex 
                                flex-col 
                                items-start 
                                justify-end 
                                h-full 
                                mx-10 
                                px-5 
                                pb-10
                                gap-5 
                                z-10 
                                text-[#FFFFFF]'>
                    <p className='max-w-[300px] text-3xl'>{title}</p>
                    <p className='max-w-[400px] text-[12pt]'>{truncateText(description, 40)}</p>
                </div>
            </div>
            {/* body Content */}
            <div className='w-full
                      bg-gradient-to-b from-[#000000] from-10% to-[#011022] to-100%
                      bg-cover 
                      bg-center
                      flex
                      flex-col
                      items-start
                      justify-start
                      px-5 
                      pt-20'>
                {/* Top Trending */}
                <div id='trend' className='flex flex-col mx-10 my-15 px-5 py-10 gap-20 '>
                    <p className='text-[#FFFFFF] text-4xl font-bold pl-2'>Now Trending</p>
                    <div className='flex 
                                    justify-start 
                                    gap-6 
                                    max-w-[1100px] 
                                    overflow-auto 
                                    pl-2 pt-4 
                                    overflow-y-hidden'>
                        {trendData.map((movie, index) => (
                            <div key={movie.id} className="w-52 
                                                           text-center 
                                                           relative 
                                                           ease-in-out 
                                                           hover:scale-105 
                                                           duration-300
                                                           cursor-pointer"
                                onClick={() => handlePoster(movie.id)}>
                                <img src={movie.poster_path} alt={movie.title} className="max-w-52 rounded-lg" />
                                <h1 className="font-serif
                                               text-md 
                                               font-semibold 
                                               my-2 px-1 
                                               text-[#ffffff]">{movie.title}</h1>
                                <p className="font-serif 
                                              font-bold 
                                              p-2 
                                              absolute top-0 left-0 
                                              text-5xl 
                                              rounded-tl-lg 
                                              rounded-br-lg 
                                              text-[#ffffff] 
                                              bg-azure-radiance-500">{index + 1}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Western Movies */}
                <div id='western' className='flex 
                                             flex-col 
                                             mx-10 my-15 
                                             px-5 py-10 
                                             gap-20 '>
                    <p className='text-[#FFFFFF] text-4xl font-bold pl-2'>Western Movies</p>
                    <div className='flex 
                                    justify-start 
                                    gap-6 max-w-[1100px] 
                                    overflow-auto 
                                    pl-2 pt-4 
                                    overflow-y-hidden'>
                        {westernMovies.map((movie) => (
                            <div key={movie.id} className="w-52 
                                                           text-center 
                                                           relative 
                                                           ease-in-out hover:scale-105 duration-300
                                                           cursor-pointer"
                                 onClick={() => handlePoster(movie.id)}>
                                <img src={movie.poster_path} alt={movie.title} className="max-w-52 rounded-lg" />
                                <h2 className="font-serif text-md font-semibold my-2 px-1 text-[#ffffff]">{movie.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Anime Movies */}
                <div id='anime' className='flex 
                                           flex-col 
                                           mx-10 my-15 
                                           px-5 py-10 
                                           gap-20 '>
                    <p className='text-[#FFFFFF] text-4xl font-bold pl-2'>Anime Movies</p>
                    <div className='flex 
                                    justify-start 
                                    gap-6 
                                    max-w-[1100px] 
                                    overflow-auto 
                                    pl-2 pt-4 
                                    overflow-y-hidden'>
                        {animeMovies.map((movie) => (
                            <div key={movie.id} className="w-52 
                                                           text-center 
                                                           relative 
                                                           ease-in-out hover:scale-105 duration-300
                                                           cursor-pointer"
                                 onClick={() => handlePoster(movie.id)}>
                                <img src={movie.poster_path} alt={movie.title} className="max-w-52 rounded-lg" />
                                <h2 className="font-serif text-md font-semibold my-2 px-1 text-[#ffffff]">{movie.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Asian Movies */}
                <div id='asian' className='flex 
                                           flex-col 
                                           mx-10 my-15 
                                           px-5 py-10 
                                           gap-20 '>
                    <p className='text-[#FFFFFF] text-4xl font-bold pl-2'>Asian Movies</p>
                    <div className='flex 
                                    justify-start 
                                    gap-6 
                                    max-w-[1100px] 
                                    overflow-auto 
                                    pl-2 pt-4 
                                    overflow-y-hidden'>
                        {asianMovies.map((movie) => (
                            <div key={movie.id} className="w-52
                                                           text-center 
                                                           relative 
                                                           ease-in-out hover:scale-105 duration-300
                                                           cursor-pointer"
                                 onClick={() => handlePoster(movie.id)}>
                                <img src={movie.poster_path} alt={movie.title} className="max-w-52 rounded-lg" />
                                <h2 className="font-serif text-md font-semibold my-2 px-1 text-[#ffffff]">{movie.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Footer */}
                <div className='flex flex-col items-center mx-10 my-30 px-20 py-10 border-t-2 border-azure-radiance-50'>
                    <div className='flex items-center justify-between  w-[1000px] text-[#FFFFFF] '>
                        <p>Legal Notice</p>
                        <p>Help Center</p>
                        <p>Term Of Use</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='flex text-[#FFFFFF] items-center justify-center w-full text-sm font-serif mb-2 pb-1'>
                    <p>&copy; 2024 M-Div, Inc.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage