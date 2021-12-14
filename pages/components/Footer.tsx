import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white text-center h-max flex flex-col justify-around'>
            <span className='py-3'>
                <strong>Disclaimer:</strong> AniWatch is a no-profit project, we are not affiliated with<br/>
                Anilist or MyAnimeList and we do not host illegal files.
            </span> 
            <span className='py-3 flex justify-center'>
                <img src="/img/aniapi_icon.png" alt="aniapi" className='w-5'/>
                Powered by: AniAPI
            </span>
            <span  className='py-3 flex justify-center'>
                <img src="/img/aniwatch.png" alt="aniwatch" className='w-5'/>
                © 2021 AniWatch
            </span>
        </footer>
    )
}
