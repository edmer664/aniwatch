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
        <div className='flex flex-col xl:flex-row bg-slate-600 text-white rounded-2xl h-min items-center xl:items-start w-4/5 xl:w-9/12 xl:h-72 hover:ring-gray-400 hover:ring-2'>
            <div className='xl:w-1/3 xl:rounded-l-2xl h-40 w-full xl:h-full relative rounded-t-2xl overflow-hidden'>      
                <Image
                src={props.img_url}
                alt={props.img_alt}
                layout='fill'
                objectFit='cover'
                />
            </div>
            <div className='flex flex-col xl:w-2/3 w-full p-5 text-justify'>

                <h2 className='font-bold text-xl xl:text-3xl pb-5 hover:text-slate-300 '>
                    <a href={props.link}>{props.title}</a>
                </h2>
                <p className='text-sm xl:text-base'>
                    {props.desc}
                </p>
                <div className='flex flex-wrap'>
                    {props.genres && props.genres.map(
                        (genre) => (
                            <div className='p-1 text-xs xl:text-base xl:p-1.5 bg-gray-400 rounded-md hover:bg-gray-500 m-1 duration-100 transition-all'>
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
