import React, { useState, useEffect } from 'react'

function usePathName() {
    const [windowPathName, setWindowPathName] = useState({
        path: '/',
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowPathName({
                path: window.location.pathname,
            })
        }
    }, [])
    return windowPathName
}

export default usePathName
