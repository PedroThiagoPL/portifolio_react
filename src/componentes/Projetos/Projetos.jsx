import * as C from './Projetos'
import TelaDeLoguin from './img/tela-de-login.png'
import Formulario from './img/formulario.png'
import Mario from './img/jogo-do-mario.png'
import Conversor from './img/conversor-de-moedas.png'

function Projetos () {
    return (
        <C.Container id='projetos'>
        <C.H1>Projetos</C.H1>

        <C.Projetos>   

            <C.AreaDeProjetos>
                                        
                <C.Image src={Formulario} alt="Formulário Multistep"/>
                                            
                    <C.TextoDeProjetos>
                        <C.H2>Formulário Multistep</C.H2>
                        <C.P>Criação de formulário responsivo em React com o objetivo de avaliação da compra de um produto pelo comprador. Nesse projeto foram feitas a componetização de cada página, além do uso dos hooks, useState e useForm.</C.P>
                        <C.Links>
                            <C.A href="https://formulario-multistep00.netlify.app/" target="blank">
                                <C.P>Site</C.P>
                            </C.A>
                            <C.A href="https://github.com/PedroThiagoPL/formulario-multistep" target="blank">
                                <C.P>Repositório</C.P>
                            </C.A>
                        </C.Links>
                    </C.TextoDeProjetos>
            </C.AreaDeProjetos> 

            <C.AreaDeProjetos>
                                        
                <C.Image src={TelaDeLoguin} alt="Tela de Login"/>
                    
                <C.TextoDeProjetos>
                    <C.H2>Tela de Login</C.H2>
                    <C.P>Criação de uma tela de cadastro e loguin responsiva em HTML, CSS e JavaScript para uma faculdade. Nesse projeto foram feitas a autenticação do loguin com o LocalStorage, eventos de click para os botões de cadastro e loguin e if e else para a confirmação dos caracteres cadastrados e mensagem de erro.</C.P>
                    <C.Links>
                        <C.A href="https://tela-de-login-92.netlify.app/" target="blank">
                            <C.P>Site</C.P>
                        </C.A>
                        <C.A href="https://github.com/PedroThiagoPL/tela-de-login" target="blank">
                            <C.P>Repositório</C.P>
                        </C.A>
                    </C.Links>
                </C.TextoDeProjetos>
            </C.AreaDeProjetos>  

            <C.AreaDeProjetos>
                                        
                <C.Image src={Mario} alt="Jogo do Mario"/>
                    
                <C.TextoDeProjetos>
                    <C.H2>Jogo do Mario</C.H2>
                    <C.P>Nesse projeto do jogo do Mario Bros foi utilizado as tecnologias HTML, CSS e Javascript. No Javascript foi utilizado arrow function, evento de click e if.</C.P>
                    <C.Links>
                        <C.A href="https://super-mario92.netlify.app/" target="blank">
                            <C.P>Site</C.P>
                        </C.A>
                        <C.A href="https://github.com/PedroThiagoPL/jogo-do-mario" target="blank">
                            <C.P>Repositório</C.P>
                        </C.A>
                    </C.Links>
                </C.TextoDeProjetos>
            </C.AreaDeProjetos>
            
            <C.AreaDeProjetos>
                                        
                <C.Image src={Conversor} alt="Conversor de Moedas"/>
                    
                <C.TextoDeProjetos>
                    <C.H2>Conversor de Moedas</C.H2>
                    <C.P>Criação de um conversor de moedas responsivo em HTML, CSS e JavaScript. Nesse projetos foram feitas a troca das moedas e o cálculo dos valores das conversões com if e else, manipulação da DOM em Javascript e evento click no botão de converter.</C.P>
                    <C.Links>
                        <C.A href="https://conversor-de-moedas0407.netlify.app/" target="blank">
                            <C.P>Site</C.P>
                        </C.A>
                        <C.A href="https://github.com/PedroThiagoPL/conversor-de-moedas" target="blank">
                            <C.P>Repositório</C.P>
                        </C.A>
                    </C.Links>
                </C.TextoDeProjetos>
            </C.AreaDeProjetos>   

        </C.Projetos>
        </C.Container>

    )
}

export default Projetos