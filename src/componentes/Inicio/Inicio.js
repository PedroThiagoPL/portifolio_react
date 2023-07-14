import styled from "styled-components";

export const Section = styled.section `
    display: flex;
    width: 100%;
    padding-top: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Texto = styled.div `
    display: flex;
    flex: 40%;
    flex-direction: column;
    padding-top: 10%;
    padding-left: 30px;
`

export const P = styled.p `
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
`

export const RedesSociais = styled.div `
    display: flex;
    padding-top: 2%;  
`

export const RedesDeTrabalho = styled.a `
    display: flex;
    color: white;
    align-items: flex-end;
    border-radius: 50px;
    text-decoration: none;
    font-weight: none;
    padding: 6px 20px; 
    gap: 0.5rem;
    margin-right: 1rem;
    position: relative;
    transition: all 0.5s;

    &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
    padding: 3px;
    background: linear-gradient(45deg,#c23ee8,#24d1fd);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    }

    &:hover {
        transform: scale(1.1);
    }

    >svg {
        margin-bottom: 6px;
        height: 20px;
    }
`

export const Image = styled.div `
    display: flex;
    flex: 60%;
`

export const Logo = styled.img `
    width: 100%;
    height: 500px;
`

