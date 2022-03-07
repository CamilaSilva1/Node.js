//JS criado por Camila Silva em 09/02/2022
//JS container para armazenar os switchs

//este container sera responsavel por alterar classes

//bibliotecas
import styles from './Container.module.css'

function Container(props){
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>

            {props.children}

        </div>
    )
}

export default Container