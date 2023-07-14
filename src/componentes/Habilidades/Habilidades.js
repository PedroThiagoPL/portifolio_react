import styled from "styled-components";

export const Container = styled.div`
    width: 100%; 
    margin-top: 100px;
    padding-top: 80px;

    @media (max-width: 768px) {
        margin-top: 500px;
    }
`

export const H3 = styled.h3 `
    font-size: 35px;
    color: #CB86F3;
    text-align: center;
    margin-bottom: 30px;
`

export const Skills = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; 
`

export const Habilidade = styled.div `
    width: 400px;
    height: 300px;
    display: block;
    color: white;
    font-family: 'Inter', sans-serif;
    text-align: center;
    text-align: center;
    margin: 10px;
    padding: 20px;
    border: 3px solid transparent;
    border-image: linear-gradient(to left, #d24074, #6518b4);
    border-image-slice: 1; 
`

export const Image = styled.img `
    width: 100px;
`

export const H1 = styled.h1 `
    font-size: 24px;
`

export const P = styled.p `
    font-size: 20px;
`