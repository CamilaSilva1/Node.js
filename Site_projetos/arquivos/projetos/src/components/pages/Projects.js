/*Criado por Camila Silva em 14/02/2022*/
/*pagina que irá conter todos os projetos cadastrados*/

//js
import Message from './Message.js'
import {useLocation} from 'react-router-dom'
import ProjectCard  from '../project/ProjectCard.js'
import { useState, useEffect } from 'react'
import Loading from '../form/Loading.js'

//layouts
import styles from '../layouts/Projects.module.css'
import Container from '../layouts/Container.js'
import LinkButton from '../layouts/LinkButton.js'

function Projects(){

    //mensagem do projeto
    const [projectMessage, setProjectMessage] = useState('')


    //configurando o estado de exibição do loading 
    const [removeLoading, setRemoveLoading] = useState(false)

    //array para salvar os projetos criados
    const [projects, setProjects] = useState([])

    //hook para utilizar a mensagem do json
    const location = useLocation()

    //começando com a mensagem vazia
    let message = ''

    

    //se tiver algo no state
    if(location.state){
        //acessando o message e atribuindo um valor a ela
        message = location.state.message
    }

    //useEffect para renderizar apenas uma vez e fetch para buscar os dados em json
    useEffect(() =>{
        fetch('http://localhost:5000/projects',{

            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
        },
    }).then((resp) => resp.json())//transformando os dados em json
      .then((data) => {
          
            console.log(data)
            setProjects(data)

            //quando carregar os objetos, eu removo o loading
            setRemoveLoading(true)

      }).catch((err) => console.log(err))//se caso der algum erro
}, [])
        
    //função para remover projeto
    function removeProject(id){

        //fazendo um request no json
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())//transformando os dados em json
          //fazendo algo com os dados adquiridos em json
          .then(data =>{

            //filtrando os projetos para eliminar o projeto de acordo com o ID
            setProjects(projects.filter((project) => project.id !== id))

            //mensagem de remoção do projeto
            setProjectMessage('Projeto removido com sucesso!')

          })
          .catch((err) => console.log(err))//mensagem de erro
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                 <h1> Meus Projetos </h1>
                 <LinkButton to="/NewProject" text="Criar Projeto" />

            </div>

             {/**exibindo msg de sucesso */}
             {message &&  <Message type="sucess" msg={message} />}

             {/**exibindo msg quando o projeto for excluido */}
             {projectMessage && <Message type="sucess" msg={projectMessage} />}

             <Container customClass="start">

                  {/**exibindo os dados em json dinamicamente na tela */}
                  {projects.length > 0 &&
                    projects.map((project) => (

                        <ProjectCard id={project.id}
                                     name={project.name}
                                     budget={project.budget}
                                     category={project.category.name}
                                     key={project.id}//por causa da repetição
                                     handleRemove={removeProject}
                                      />

                    ))}

                    {!removeLoading && <Loading />}

                    {/**Se caso nao tiver projetos */}
                    {removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}

             </Container>
        </div>

    )
}

export default Projects