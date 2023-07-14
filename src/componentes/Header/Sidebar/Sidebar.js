import styled from "styled-components";

export const Container = styled.div`
  background-color: #2b2c2c;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  animation: showSidebar .4s;


  > svg {
    position: fixed;
    color: #CB86F3;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
}

@keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

export const Ul = styled.ul `
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const A = styled.a `
    text-decoration: none;
    color: #00D2DF;
    font-size: 1.5rem;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: #CB86F3;
        transition-duration: 0.8s;
    }
`

export const Li = styled.li `
    position: relative;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    padding: 27px;
`