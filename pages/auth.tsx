import React, { useEffect, useState } from 'react'

export default function auth() {
    const [token, setToken] = useState<string>('');
    useEffect(() => {
        const parsedHash = new URLSearchParams(
            window.location.hash.substr(1) // skip the first char (#)
          );
        let parse:string = parsedHash.get("access_token");
        setToken(parse);
        localStorage.setItem('token',token);
        
    }, [token])
    return (
        <div>
            
        </div>
    )
}
