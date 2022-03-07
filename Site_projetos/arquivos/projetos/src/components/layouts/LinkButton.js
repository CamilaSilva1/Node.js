//JS criado por Camila Silva em 15/02/2022
//Botões com links

//layouts
import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

//adicionando um link ao botão
function LinkButton({to, text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton