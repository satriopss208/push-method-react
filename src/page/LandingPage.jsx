import React from 'react'
import backgroundImg from '../assets/background1.png';
import logoMdiv from '../assets/LogoTugasDibimbingL.png';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className='flex 
                    flex-col
                    items-center
                    justify-center
                    min-h-screen
                    text-[#FFFFFF]
                    bg-[#000000]
                    gap-80'
        >
            <div className='h-screen
                      w-full
                      bg-cover 
                      bg-center
                      flex
                      items-center
                      justify-center'
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <div className='grid
                        grid-cols-1
                        items-center
                        content-center 
                        gap-5'>
                    <h1 className='text-center text-5xl font-bold'>M-DIV And Chill</h1>
                    <p className="text-center text-xl w-144">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='flex items-center justify-center'>
                        <Link to={"/login"}>
                            <button className="bg-azure-radiance-700 border-none py-[10px] px-[20px] rounded-md w-32 font-semibold"> Watch Now
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='absolute top-8 left-24'>
                    <img src={logoMdiv} alt="Logo" className='w-48' />
                </div>
                <div className='absolute top-8 right-24'>
                    <Link to={"/login"}>
                        <button className="bg-azure-radiance-700 border-none py-[10px] px-[20px] rounded-md w-18 font-semibold"> Log In
                        </button>
                    </Link>
                </div>
            </div>
            {/* Footer */}
            <div>
                <div className='flex flex-col items-center mx-10 my-30 px-20 py-10 border-t-2 border-azure-radiance-50 '>
                    <div className='flex items-center justify-between  w-[1000px] text-[#FFFFFF] '>
                        <p>Legal Notice</p>
                        <p>Help Center</p>
                        <p>Term Of Use</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='flex text-[#FFFFFF] items-center justify-center w-full text-sm font-serif mb-2 pb-1 '>
                    <p>&copy; 2024 M-Div, Inc.</p>
                </div>
            </div>
        </div >
    );
};

export default LandingPage;