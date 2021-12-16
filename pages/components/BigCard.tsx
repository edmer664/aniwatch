import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BigCard(
    props: { 
        img_url: string,
        img_alt: string,
        title: string,
        desc: string,
        link: string,
        genres: Array<string>,

}) {
    

    return (
        <div className='flex bg-slate-600 text-white rounded-2xl w-9/12 h-72 hover:ring-gray-400 hover:ring-2'>
            <div className='w-1/3 rounded-l-2xl h-full relative overflow-hidden'>      
                <Image
                src={props.img_url}
                alt={props.img_alt}
                layout='fill'
                objectFit='cover'
                />
            </div>
            <div className='flex flex-col w-2/3 px-5 text-justify'>

                <h2 className='font-bold text-3xl pb-5 hover:text-slate-300 '>
                    <a href={props.link}>{props.title}</a>
                </h2>
                <p>
                    {props.desc}
                </p>
                <div className='flex flex-wrap'>
                    {props.genres.map(
                        (genre) => (
                            <div className='p-1.5 bg-gray-400 rounded-md hover:bg-gray-500 m-1 duration-100 transition-all'>
                                <a href={`/Explore#genre=${genre}`}>
                                    {genre}
                                </a>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
