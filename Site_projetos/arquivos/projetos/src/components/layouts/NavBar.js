/*Criado por Camila Silva em 14/02/2022*/
/*Barra de navegação*/

//bibliotecas
import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

//direcionar os links da barra de navegação
function NavBar (){
    return(

        <nav className={styles.navbar}>
              <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"> HOME </Link>
                    </li>

                    <li className={styles.item}> 
                        <Link to="/projects">PROJETOS</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/contact"> CONTATO </Link>
                    </li>

                    <li className={styles.item}> 
                        <Link to="/company"> EMPRESA </Link>
                    </li>

                </ul>

            
        </nav>

    )
}

export default NavBar