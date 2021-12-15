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
                        href={`https://api.aniapi.com/v1/oauth?response_type=token&client_id=2d70a4c3-8754-42cf-b52f-32185a3e245b&redirect_uri=http://localhost:3000/Auth`}
                         className='bg-blue-700 rounded-md p-2 hover:bg-blue-900 ease-in duration-300 drop-shadow-md shadow-blue-500 shadow-inner motion-safe:animate-pulse'>Watch Now</a>
                    </div>
                </div>
                <img src="/img/hero_rimuru.png" alt="Hero Image"  className='w-1/2'/>
            </main>
            <Footer/>
        </React.Fragment>
    )
}
export default Landing;