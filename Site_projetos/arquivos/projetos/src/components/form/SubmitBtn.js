//JS criado por Camila Silva em 18/02/2022
//Armazenar os botões do projeto de forma dinamica

//layouts
import styles from '../layouts/SubmitBtn.module.css'

function SubmitBtn({text}){
    return(
        <div>
            <button className={styles.btn}>
                {text}
            </button>
        </div>
    )
}

export default SubmitBtn