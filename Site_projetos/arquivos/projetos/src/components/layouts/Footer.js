/*Criado por Camila Silva em 14/02/2022*/
/*Rodapé*/

//bibliotecas
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

//configurando os icones
function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}> 
                <li> 
                    <FaFacebook />
                </li>

                <li>
                    <FaInstagram />
                </li>

                <li> 
                    <FaLinkedin />
                </li>
            </ul>

            <p className={styles.copy_right}> <span> Projetos </span> &copy; 2022 </p>
        </footer>
    )
}

export default Footer 