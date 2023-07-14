import {FaWhatsapp, FaFileDownload} from 'react-icons/fa'
import Pedro from './img/Pedro.jpeg'
import * as C from './Sobre.js'

function Sobre () {
    return (
        <C.Container id='sobre'>
            <C.ContainerFoto>
                <C.Foto src={Pedro} alt="Pedro Thiago" />               
            </C.ContainerFoto>

            <C.Sobre>
                <C.H3>SOBRE</C.H3>
                <C.H4>Setúbal, Portugal</C.H4>
                <C.Descricao>Sou um desenvolvedor apaixonado pelo o que eu faço. Costumo dizer que “quem faz o que gosta vive de férias”. Por isso estou sempre querendo aprender algo novo que me ajude a ser um desenvolvedor cada vez melhor. Estou em transição de carreira e atuo como front-end, utilizando HTML, CSS, JavaScript, React JS, Bootstrap 5 e atualmente estou estudando Typescript.
                </C.Descricao>

                <C.Contatos>
                    <C.A href="curriculo/Front-end Developer - Pedro Lima.pdf" download="Front-end - Pedro Thiago" type="aplicativo/pdf">
                        <FaFileDownload/>
                        <C.P>Currículo</C.P>
                    </C.A>

                    <C.A href="https://api.whatsapp.com/send?phone=351963140875&" target="blank">
                        <FaWhatsapp/>
                        <C.P>Whatsapp</C.P>
                    </C.A>
                </C.Contatos>

            </C.Sobre>

        </C.Container>

    )
}

export default Sobre