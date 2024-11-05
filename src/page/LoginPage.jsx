import React from 'react'
import backgroundImg from '../assets/background1.png';
import logoMdiv from '../assets/LogoTugasDibimbingL.png';
import { useNavigate } from 'react-router-dom';




const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  }

  return (
    <div className='flex 
    flex-col
    items-center
    justify-center
    min-h-screen
    text-[#ffffff]
    bg-[#000000]
    gap-64'
    >
      <div className='h-screen
                      w-full
                      bg-cover 
                      bg-center
                      flex
                      items-center
                      justify-center'
        style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className='flex
                        flex-col
                        items-center
                        justify-center 
                        gap-5'>
          <div className='flex
                          flex-col 
                            items-center 
                            justify-center
                            bg-[#000000a0]
                            border-2
                            border-azure-radiance-600
                            mt-10
                            pt-5
                            px-12
                            pb-8
                            w-[400px]
                            rounded-lg'>

            <h1 className='text-center text-3xl font-bold'>Log In</h1>
            <form>
              <div className='flex flex-col gap-5 w-80 mt-10'>
                <input className='flex bg-[#2d2d2d80] p-3 rounded-md border border-azure-radiance-600 text-[#ffffff]'
                  type="email"
                  id='email'
                  name='email'
                  placeholder='Email Address...'

                  required />
                <input className='flex bg-[#2d2d2d80] p-3 rounded-md border border-azure-radiance-600 text-[#ffffff]'
                  type="password"
                  id='password'
                  name='password'
                  placeholder='Password...'

                  required />

                <button className='bg-azure-radiance-500 py-1 mt-5 rounded-md text-[#ffffff] text-xl font-semibold' onClick={handleLogin}>Log in</button>
              </div>
            </form>
            <p className='pt-3 text-sm'>Forgot Password?</p>
            <br />
            <br />
            <br />
            <p className='text-sm'>New to M-Div? <strong className='text-sm'>Sign up now</strong></p>
          </div>
        </div>
        <div className='absolute top-8 left-24'>
          <img src={logoMdiv} alt="Logo" className='w-48' />
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
    </div>
  )
}

export default LoginPage