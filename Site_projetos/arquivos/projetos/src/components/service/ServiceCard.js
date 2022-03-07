/*Criado por Camila Silva em 02/03/2022*/
/*Js para configurar e estilizar o card de serviços que foram adicionados ao projeto*/

//style
import styles from '../layouts/ProjectCard.module.css'

//importando icons
import {BsFillTrashFill} from 'react-icons/bs'

function ServiceCard({id, name, cost, description, handleRemove}){

    //metodo para subtrair o valor do custo do orçamento total
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.project_card}>

            <h4>{name}</h4>

            <p>
                <span>Custo total: </span> R${cost}
            </p>

            <p>
                {description}
            </p>

            <div className={styles.project_card_actions}>

                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>

            </div>
        </div>
    )
}

export default ServiceCard