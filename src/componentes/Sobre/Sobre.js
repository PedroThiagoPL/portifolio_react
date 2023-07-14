import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 500px; 
    padding-top: 90px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ContainerFoto = styled.div`
    flex: 20%;
    padding: 100px; 

    @media (max-width: 768px) {
        padding-bottom: 0;
    }
`

export const Foto = styled.img `
    width: 200px;
    height: 265px;
    border: 3px solid #00d2df;
    border-radius: 50px; 
`

export const Sobre = styled.div `
    flex: 80%;
    text-align: justify; 
    padding: 100px;
    color: white;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
    }
`

export const H3 = styled.h3 `
    color: #CB86F3;
    font-weight: bold;
    font-size: 1.8rem;
    padding-bottom: 20px;
`

export const H4 = styled.h4 `
    font-size: 1.4rem;
    margin-bottom: 10px;
`

export const Descricao = styled.p `
    font-size: 1.2rem;
    padding-bottom: 10px;

    @media (max-width: 768px) {
        text-align: justify;
    }
`

export const Contatos = styled.div`
    display: flex;
    padding-top: 2%;
`

export const A = styled.a `
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
        margin-bottom: 5px;
        height: 17px;
    }
`

export const P = styled.p `
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
`