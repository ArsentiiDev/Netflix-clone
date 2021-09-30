import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './nav.css'

function Nav() {

    const [show, handleShow] = useState(false)
    const history = useHistory()

    const transitionNavBar = () => {
        if(window.scrollY>100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }


    useEffect(()=>{

        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar)

    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img
                    onClick={()=>history.push('/')}
                    className="nav__logo"
                    src="/assets/Netflix_logo.png"
                    alt="" />
                <img
                onClick={()=>history.push('/profile')}
                    className="nav__avatar"
                    src="/assets/avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Nav
