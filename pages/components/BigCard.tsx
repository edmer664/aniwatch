import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BigCard(
    props: { 
        img_url: string,
        img_alt: string,
        title: string,
        desc: string,
        link: string

}) {
    

    return (
        <div className='flex bg-slate-600 text-white rounded-2xl w-9/12 '>
            <div className='w-1/3 rounded-l-2xl'>      
                <Image
                src={props.img_url}
                alt={props.img_alt}
                width={300}
                height={200}
                />
            </div>
            <div className='flex flex-col'>

                <h2 className='font-bold text-3xl pb-5'>
                    <a href={props.link}>{props.title}</a>
                </h2>
                <p>
                    {props.desc}
                </p>
            </div>
        </div>
    )
}
