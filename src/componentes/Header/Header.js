import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #2b2c2c;
    padding: 15px 2rem;
    position: fixed;
    z-index: 1;
    height: 70px;
    box-shadow: 0 0 20px 3px;
`

export const H2 = styled.h2 `
    font-size: 2.2rem;
    background: linear-gradient(270deg,#CB86F3, #00D2DF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 45px;
`

export const Nav = styled.nav `
   display: flex;
`

export const Ul = styled.ul `
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: end;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Li = styled.li `
    position: relative;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    padding: 23px;

    @media (max-width: 768px) {
        z-index: 4;
        top: 64px;
        overflow: hidden;
        padding: 30px;
    }
`

export const A = styled.a `
    text-decoration: none;
    color: #00D2DF;
    font-size: 1.2rem;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: #CB86F3;
        transition-duration: 0.8s;
    }
`

export const ContainerIcon = styled.div `

     > svg {
        display: none;
    }

    @media (max-width: 768px) {
        margin-right: 30px;

        > svg {
            display: flex;
            position: fixed;
            color: #00D2DF;
            width: 30px;
            height: 30px;
            margin-top: -13px;
            cursor: pointer;
        }
    }
`