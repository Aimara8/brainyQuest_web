import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Menu = () => {
    return (
        <>
            <p><a href="#home">Inicio</a></p>
            <p><a href="#what">Qué es BrainyQuest</a></p>
            <p><a href="#features">Beneficios</a></p>
            <p><a href="#possibility">Sobre Nosotros</a></p>
            <p><a href="#blog">Blog</a></p>
        </>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>

            <div className='navbar-links'>
                
                <div className='navbar-links-logo'>

                    <img src={logo} alt="Logo" />

                </div>

                <div className='navbar-links_container'>
                    <Menu />
                </div>

            </div>

            <div className='navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sing Up</button>
            </div>

            <div className='navbar-menu'>
                {toggleMenu ?

                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => setToggleMenu(false)}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-list" viewBox="0 0 16 16" onClick={() => setToggleMenu(true)}>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>}
                {toggleMenu && (
                    <div className='navbar-menu_container'>
                        <div className='navbar-menu_container-links'>
                            <Menu />
                            <div className='navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sing Up</button>
                            </div>
                        </div>
                    </div>
                )

                }
            </div>

        </div>
    )
}

export default Navbar;