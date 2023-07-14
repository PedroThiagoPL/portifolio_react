import {FaLinkedin, FaGithub} from 'react-icons/fa'
import TypeWriterEffect from 'react-typewriter-effect';
import Logo from './img/LooperBG.png'
import * as C from './Inicio.js'

function Inicio () {
    return (
        <C.Section id='inicio'>
            <C.Texto>
                <C.P>Olá, eu sou</C.P>
                <TypeWriterEffect
                    startDeLay={2000}
                    cursorColor="#c23ee8"
                    multiText={[
                        'Pedro Thiago'
                    ]}
                    textStyle={{
                        color: '#00d2df',
                        fontSize: '2.6rem',
                    }}>
                    </TypeWriterEffect>
                <C.P>Desenvolvedor Frontend</C.P>

                <C.RedesSociais>
                    <C.RedesDeTrabalho href="https://www.linkedin.com/in/pedrothiagopl/" target="blank">
                        <FaLinkedin/>                 
                        <C.P>Linkedin</C.P>
                    </C.RedesDeTrabalho>

                    <C.RedesDeTrabalho href="https://github.com/PedroThiagoPL" target="blank">
                        <FaGithub/>
                        <C.P>Github</C.P>
                    </C.RedesDeTrabalho>
                </C.RedesSociais>
            </C.Texto>

            <C.Image>
                <C.Logo src={Logo} alt="" />
            </C.Image>
        </C.Section>
    )
}

export default Inicio