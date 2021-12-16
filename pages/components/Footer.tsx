import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-slate-700 text-white text-center h-max flex flex-col justify-around'>
            <span className='py-3 px-10 text-xs xl:text-sm text-justify'>
                <strong>Disclaimer:</strong> AniWatch is a no-profit project, All of the free resources found on this app are hosted on third-party servers
                that are freely available to watch online for all internet users. Any legal issues regarding the free Anime should be taken up with the actual
                file hosts themselves, as we're not affiliated with them. Copyrights and trademarks for the LN, and other promotional materials are held by
                their respective owners and their use is allowed under the fair use clause of the Copyright Law.
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
