/*Criado por Camila Silva em 23/02/2022*/
/*Pagina de carregamento*/

//css
import styles from '../layouts/Loading.module.css'

//img
import loading from '../../img/loading.svg'

function Loading(){
    return(
        //carregando a img de loading
        <div className={styles.loader_container}>

            <img className={styles.loader} src={loading} alt="Loading" />

        </div>
    )
}

export default Loading