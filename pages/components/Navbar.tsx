import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='bg-slate-700 flex w-screen h-20 px-10 text-white justify-evenly rounded-b-3xl items-center'>
            <div className='flex'>
                <div className='w-16 self-center'>
                    <Image
                    src='/img/aniwatch.png'
                    alt='AniWatch Logo'
                    width={50}
                    height={70}
                    />
                </div>
                <span className='self-center text-3xl font-bold'>
                    AniWatch
                </span>
            </div>
            <div className='flex justify-around w-1/5'>
                <a className='hover:text-slate-400' href="/Watch">Home</a>
                <a className='hover:text-slate-400'  href="/Explore">Explore</a>
            </div>
            <div className='flex'>
                <form >
                    <input className='p-1 text-black rounded-l-xl focus:ring-slate-500 focus:ring focus:outline-none' type="text" />
                    <button className='p-1 rounded-r-xl border-l-2 border-gray-800 bg-sky-800 text-white hover:bg-sky-500 duration-100 '>Search</button>
                </form>
            </div>
        </nav>
    )
}
