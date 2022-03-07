/*Criado por Camila Silva em 22/02/2022*/
/*Responsavel por trazer os dados do json por meio de componentes*/

//layouts
import styles from '../layouts/ProjectCard.module.css'

//icons
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

//imprimindo os dados
function ProjectCard({id, name, budget, category, handleRemove}){

    //metodo para remoção de projeto
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.project_card}>

            <h4>{name}</h4>

            <p>
                <span>Orçamento:</span> R${budget}
            </p>

            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}>
                    
                 </span> {category}
            </p>

            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>

        </div>
    )
}

export default ProjectCard