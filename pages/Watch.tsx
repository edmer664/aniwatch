import React, { useEffect, useState } from 'react'
import BigCard from './components/BigCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const ANIAPI = require("@mattplays/aniapi");

export default function Watch() {
    const [token, setToken] = useState<string>('');
    const [data, setData] = useState();
    useEffect(() => {
        

        if(typeof window !== 'undefined'){
            let cookie: string = localStorage.getItem('token') ?? '';
            setToken(
                cookie
            );
            
            const API = new ANIAPI.API(token);
            API.Anime.Get({
                year:2020,
            }).then((res:any) => {
                setData(res)
            });
            console.log(data);
        }
        
    }, [token])
    return (
        <div className='bg-black w-screen h-screen'>
            <Navbar/>
                <main className='flex flex-col items-center py-10'>
                    <BigCard
                    img_url='/img/hero_rimuru.png'
                    img_alt='rimuru'
                    title='rimuru'
                    desc='lorem ipsum dolor emet por que contiguyo yasinte'
                    link='/Watch'
                    />
                </main>
            <Footer/>
        </div>
    )
}
