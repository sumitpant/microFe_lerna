import React, { lazy, Suspense, useEffect } from 'react'

const NavBar = lazy(() => import('navigation/NavBar'));

const App = () => {
    useEffect(()=>{
        
    })
    return (
        <div>
            <Suspense fallback="Loading...">
                <NavBar />
            </Suspense>
        </div>
    )
}

export default App