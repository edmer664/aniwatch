import React from 'react';
import Image from 'next/image';

export default function SmallCard(props:{
    img_url: string,
    img_alt: string,
    title: string,
    id: string,
}) {
    return (
        <div className='flex flex-col items-center text-white hover:animate-pulse hover:scale-105 w-24 h-48 m-1 xl:m-6'>
            <a href={`anime/#id=${props.id}`}>
                <div className='relative w-24 h-40'>
                    <Image
                        layout='fill'
                        objectFit="contain"
                        src={props.img_url}
                        alt={props.img_alt}
                    />
                </div>
                <h2 className='text-xs'>
                    {props.title && props.title.substring(0,45)}
                </h2>
            </a>
            
        </div>
    )
}
