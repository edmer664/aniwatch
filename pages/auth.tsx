import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Footer from './components/Footer';

export default function Auth() {
    const [token, setToken] = useState<string>('');
    useEffect(() => {
        
        if(typeof window !== 'undefined') {
            const parsedHash = new URLSearchParams(
                window.location.hash.substr(1) // skip the first char (#)
            );
            let parse: string = parsedHash.get("access_token") ?? '';
            setToken(parse);
            localStorage.setItem('token',token);
        }
    }, [token])
    return (
        <React.Fragment>
            <main className='flex flex-col h-screen w-screen items-center bg-black text-white py-24'>
                <div className="w-64">
                    <Image 
                    src="/img/approve.png"
                    width={500}
                    height={500}
                    />
                    
                </div>
                <h1 className='font-bold text-3xl py-5'>
                    Authentication successful
                </h1>
                <span className="pb-5">
                    You can now proceed to watch awesome anime!
                </span>
                <a href="/watch" className='bg-sky-600 rounded-md p-2 hover:bg-sky-900'>Continue</a>
            </main>
            <Footer/>
        </React.Fragment>
    )
}
