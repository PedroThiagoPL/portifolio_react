import React from "react";
import * as C from './Sidebar'
import { FaTimes } from "react-icons/fa";

function Sidebar ({active}) {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <C.Container sidebar={active}>
            <FaTimes onClick={closeSidebar}/>
            <C.Content>
                <C.Ul>
                    <C.Li onClick={closeSidebar}>
                        <C.A href="#inicio">Início</C.A>
                    </C.Li>
                    <C.Li onClick={closeSidebar}>
                        <C.A href="#sobre">Sobre</C.A>
                    </C.Li>
                    <C.Li onClick={closeSidebar}>
                        <C.A href="#habilidades">Habilidades</C.A>
                    </C.Li>
                    <C.Li onClick={closeSidebar}>
                        <C.A href="#projetos">Projetos</C.A>
                    </C.Li>
                </C.Ul>
            </C.Content>
        </C.Container>
    )
}

export default Sidebar