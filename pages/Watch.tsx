import React, { useEffect, useState } from 'react'

export default function Watch() {
    const [token, setToken] = useState<string>('');
    useEffect(() => {
        if(typeof window !== 'undefined'){
            let cookie: string = localStorage.getItem('token') ?? '';
            setToken(
                cookie
            );
        }
        
    }, [token])
    return (
        <div className='bg-black w-screen h-screen justify-center text-center'>
            
            <div className='text-6xl text-white py-36'>UNDER PROGRESS!</div>
            

        </div>
    )
}
