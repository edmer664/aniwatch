import React from 'react'
import Footer from './Footer'

export const Landing: React.FC = () => {
    return (
        <React.Fragment>
            <main className='flex h-screen px-10 bg-black text-white'>
                <div className='py-36 w-1/2'>
                    <div className='flex'>
                        <img src="/img/aniwatch.png" alt="AniWatchlogo" className='w-24'/>
                        <h1 className='text-5xl self-center'>AniWatch</h1>
                    </div>
                    <div className='py-10'>
                        <p className='text-2xl'>
                        Laugh, cry and be thrilled watching your favorite<br/>
                        anime series for free. Just sign up and your free to go.<br/>
                        No subscription or ads. <span className='text-blue-700 font-bold'>Made for passion!</span>
                        </p>
                    </div>
                    <div className='w-full text-center '>
                        <a 
                        href={`https://api.aniapi.com/v1/oauth?response_type=token&client_id=014487c1-7fdf-4c79-a97c-58dfe46cad51&redirect_uri=https://aniwatch-eta.vercel.app/auth`}
                         className='bg-blue-700 rounded-md p-2 hover:bg-blue-900 ease-in duration-300'>Watch Now</a>
                    </div>
                </div>
                <img src="/img/hero_rimuru.png" alt="Hero Image" />
            </main>
            <Footer/>
        </React.Fragment>
    )
}
export default Landing;