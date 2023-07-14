import styled from "styled-components";

export const Container = styled.div `
    margin-top: 100px;
`

export const H1 = styled.h1 `
    color: #CB86F3;
    text-align: center;
    font-size: 35px;
    padding: 80px 0px 30px 0px;
`

export const Projetos = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.0em; 
`

export const AreaDeProjetos = styled.div `
    border: 3px solid #00d2df;
    width: 440px;
    height: 345px;
    margin: 10px;
    color: white;
    text-align: center;    
    position: relative;
`

export const TextoDeProjetos = styled.div `
    position: absolute;
    top: -40px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.25s;
    background-color: transparent;
    color: #000000;

    &:hover {
        opacity: 1;
    }
`

export const Image = styled.img `
    display: block;
    width: 100%;
    height: 340px;
    background-color: transparent;
`

export const H2 = styled.h2 `
    padding: 10px;
    margin-top: 90px;
    background-color: transparent;
`

export const P = styled.p `
    text-align: justify;
    padding: 15px;
    background-color: transparent;
`

export const Links = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: center;
    gap: 2rem;
`

export const A = styled.a `
    background-color: transparent;
    display: flex;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #00d2df;
    justify-content: center;
    border: 1px solid none;
    border-radius: 10px;
`

export const Visualizar = styled.img `
   width: 90px;
   height: 25px;
   background-color: transparent;
`