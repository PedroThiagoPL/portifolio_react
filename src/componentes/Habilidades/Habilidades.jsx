import * as C from './Habilidades'
import HTML5 from './img/html.png'
import CSS3 from './img/CSS.png'
import Javascript from './img/javascript.png'
import Bootstrap5 from './img/bootstrap-5.png'
import Git from './img/git.png'
import React from './img/react.png'


function Habilidades () {
    return (
        <C.Container id='habilidades'>
            <C.H3>Habilidades</C.H3>

            <C.Skills>
                <C.Habilidade>
                    <C.Image src={HTML5} alt="html5"/>
                    <C.H1>HTML5</C.H1>
                    <C.P>Conhecimentos em formulários, botões, imagens, vídeos, entres outros. HTML semântico.</C.P>
                </C.Habilidade>

                <C.Habilidade>
                    <C.Image src={CSS3} alt="CSS3"/>
                    <C.H1>CSS3</C.H1>
                    <C.P> Conhecimentos em design responsivo, flexbox, grid, seletores, classes, ids, position, estilização em geral, entre outros.</C.P>
                </C.Habilidade>

                <C.Habilidade>
                    <C.Image src={Javascript} alt="JavaScript"/>
                    <C.H1>JavaScript</C.H1>
                    <C.P>Conhecimentos em funções, variáveis, operadores, DOM, LocalStorage, JSON, entre outros.</C.P>
                </C.Habilidade>  

                <C.Habilidade>
                    <C.Image src={React} alt="ReactJS"/>
                    <C.H1>ReactJS</C.H1>
                    <C.P>Conhecimentos em components, props, styled components, Hooks, Router, React Icons</C.P>
                </C.Habilidade>             

                <C.Habilidade>
                    <C.Image src={Bootstrap5} alt="Bootstrap5"/>
                    <C.H1>BootStrap 5</C.H1>
                    <C.P>Conhecimentos em criação de layouts, utilização de ícones do bootstrap, elementos de conteúdo, formulários, entre outros.</C.P>
                </C.Habilidade>             

                <C.Habilidade>
                    <C.Image src={Git} alt="git"/>
                    <C.H1>Git</C.H1>
                    <C.P>Conhecimentos em versionamento, Git Bash, criar e clonar repositórios, uso de comandos como git add, commit, push e pull.</C.P>
                </C.Habilidade>
            </C.Skills>
        </C.Container>
    )
}

export default Habilidades