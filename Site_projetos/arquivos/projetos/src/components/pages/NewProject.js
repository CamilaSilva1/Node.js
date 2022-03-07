//JS criado por Camila Silva em 09/02/2022
//Js para armazenar novos documentos

//bibliotecas 
//layouts
import styles from '../layouts/NewProject.module.css'

//JS
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'

function NewProject(){

    //Permita que eu redirecione o usuario quando for necessario
    const navigate = useNavigate()

    //inserindo um projeto no sistema
    function createPost(project){

        //inicializando projeto e serviços (vazios)
        project.projeto = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),//mandando os dados do projeto para o banco json
        })
          .then((resp) => resp.json())//transformando os dados em json
          .then((data) =>
            {
                console.log(data)//imprimindo os dados 
                //redirecionando quando houver sucesso na criação do projeto
                navigate('/projects', {message: 'Projeto criado com sucesso'})

            })
          .catch((err) => console.log(err))//possivel erro
    }

    return(

        <div className={styles.newproject_container}>

            <h1> Criar Projeto </h1>
            <p> Crie seu projeto para adicionar seus serviços </p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/> {/* chamando a pagina do formulario do projeto */}

        </div>
    )
}

export default NewProject