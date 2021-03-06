import React, { useEffect, useState } from 'react'
import BigCard from './components/BigCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const ANIAPI = require("@mattplays/aniapi");
import Image from 'next/image';
import SmallCard from './components/SmallCard';
import { PulseLoader } from 'react-spinners';

export default function Watch() {
    const [token, setToken] = useState<string>('');
    const [data, setData] = useState<any>();
    const [seasonW, setSeasonW] = useState<string>();
    const [year, setYear] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const API = new ANIAPI.API(token);
    
    useEffect(() => {
        if(typeof window !== 'undefined'){
            let cookie: string = localStorage.getItem('token') ?? '';
            setToken(
                cookie
            );
        }
        
        const yeartd = new Date().getFullYear();
        const getSeason = (d: Date) => Math.floor((d.getMonth() / 12 * 4)) % 4;
        const currSeason = getSeason(new Date());
        const seasonInWords = (x:number) => ['Winter', 'Spring','Summer','Fall'][x];      
        setSeasonW(seasonInWords(currSeason));
        setYear(yeartd);

        // fetchicng data
        API.Anime.Get({
            year:yeartd,
            season:currSeason,
        }).then((res:any) => {
            setData(res);
            setLoading(false);
        });
        
        
    }, [])
    return (
        <div className='bg-black w-screen h-screen'>
            <Navbar/>
                <main className='flex flex-col bg-black text-white items-center py-10 justify-center'>
                    <div className='flex'>
                        <div className='relative w-12'>
                            <Image
                                layout='fill'
                                objectFit="contain"
                                src='/img/thumsup.png'
                                alt="chibi thumbs up"
                            />
                        </div>
                        <h1 className='font-bold xl:text-4xl py-5 text-2xl'>
                            Top New Anime!
                        </h1>
                    </div>
                    {
                    <PulseLoader
                    css={`padding:10rem`}
                    color='#ffffff'
                    loading={loading}
                    size={15}
                    />
                    }
                    {data &&
                    <BigCard
                    img_url={data.data.documents[0].banner_image}
                    img_alt={data.data.documents[0].titles.en}
                    title={data.data.documents[0].titles.en}
                    desc={data.data.documents[0].descriptions.en.substring(0,400)}
                    link={`anime/#id=${data.data.documents[0].id}`}
                    genres = {data.data.documents[0].genres.slice(0,7)}
                    />
                    }
                    


                </main>
                <section className='flex flex-col items-center p-5 xl:p-20 w-full bg-black'>
                    <div className='flex'>
                    <div className='relative w-8'>
                            <Image
                                layout='fill'
                                objectFit="contain"
                                src='/img/thumsup.png'
                                alt="chibi thumbs up"
                            />
                        </div>
                        <h2 className='text-white text-3xl py-5 font-semibold'>
                            {seasonW} Anime {year}
                        </h2>
                    </div>
                    {
                    <PulseLoader
                    css={`padding:10rem`}
                    color='#ffffff'
                    loading={loading}
                    size={15}
                    />
                    }
                    <div className='flex flex-wrap justify-evenly w-full'>
                        {data && 
                            data.data.documents.map(
                                (anime: any) => (
                                    <SmallCard 
                                    id={anime.id}
                                    img_alt={anime.titles.en}
                                    img_url={anime.cover_image}
                                    title={anime.titles.en}
                                    
                                    />

                                )
                            )
                        }
                    </div>
                </section>
            <Footer/>
        </div>
    )
}
