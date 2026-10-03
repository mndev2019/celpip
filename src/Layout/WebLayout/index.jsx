import React, { useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import FloatingContact from '../../Component/FloatingContact'



const WebLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />


      <FloatingContact />


        </>
    )
}

export default WebLayout
