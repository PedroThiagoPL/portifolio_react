import React, { useState } from "react"
import * as C from './Header'
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar/Sidebar.jsx'

function Header () {
    const [isOpen, setIsOpen] = useState (false)

    const showSiderbar = () => {
        setIsOpen(!isOpen)
    } 
    
    
    const closeMenu = () => {
        setIsOpen(false)
    }


    return (
       <C.Container>       
        <C.H2>Pedro Thiago</C.H2>
        <C.Nav>
            <C.Ul>
                <C.Li>
                    <C.A href="#inicio">Inicio</C.A>
                </C.Li>
                <C.Li>
                    <C.A href="#sobre">Sobre</C.A>
                </C.Li>
                <C.Li>
                    <C.A href="#habilidades">Habilidades</C.A>
                </C.Li>
                <C.Li>
                    <C.A href="#projetos">Projetos</C.A>
                </C.Li>
            </C.Ul>

            <C.ContainerIcon>
                <FaBars onClick={showSiderbar} />
                {isOpen && <Sidebar active={setIsOpen} />}
            </C.ContainerIcon>
        </C.Nav>       
       </C.Container>
    )
}

export default Header