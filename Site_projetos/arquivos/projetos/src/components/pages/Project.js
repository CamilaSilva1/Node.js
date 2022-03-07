/*Criado por Camila Silva em 23/02/2022*/
/*Pagina para a exibição dos detalhes de cada projeto*/

//css
import styles from '../layouts/Project.module.css'


//bibliotecas
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { v4 as uuidv4} from 'uuid' //criar id unico

//js
import Loading from '../form/Loading.js'
import Container from '../layouts/Container.js'
import ProjectForm from '../project/ProjectForm.js'
import Message from '../pages/Message.js'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project(){

    //adquirindo o id da url
    let {id} = useParams()
    
    //configurando o projeto
    const [project, setProject] = useState([])

    //configurando serviços
    const [services, setServices] = useState([])

    //mostrar ou nao o projeto
    const [showProjectForm, setShowProjectForm] = useState(false)

    //estado para exibir ou esconder um formulario de serviço para o projeto
    const [showServiceForm, setShowServiceForm] = useState(false)

    //setando msg
    const [message, setMessage] = useState('')

    //setando o tipo da mensagem
    const [typeMsg, setTypeMsg] = useState('success')

     //chamando o projeto e monitorando o id do projeto
     useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())//transformano os dados em json
          .then((data)=>{

              setProject(data)

          })
          .catch((err) => console.log(err))//mensagem de possivel erro

    }, [id])//monitorando o id do projeto

     //função para editar o projeto selecionado
     function editPost(project){

        //budget validation
        if(project.budget < project.cost){
            //quando o orçamento for menor que o custo
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setTypeMsg('error')

            //parar o sistema
            return false
        }

        //acessando o json para atualizar o projeto
        fetch(`http://localhost:5000/projects/${project.id}`,{

            method: 'PATCH',//só atualizada o que for mandado
            headers: {
                'Content-Type': 'application/json',

            },
            //mandando os dados em forma de texto
            body: JSON.stringify(project),
        }).then((resp) => resp.json())//transformando os dados em json
          .then((data) => { 

                //att os dados do projeto no json
                setProject(data)

                //escondendo formulario
                setShowProjectForm(!showProjectForm)

                setMessage('Projeto atualizado com sucesso!')
                setTypeMsg('success')

          })
    }

    //fazendo a requisição, validando e enviando os serviços
    function createService(project){

        //validação dos serviços
        //ultimo serviço
        const lastService = project.services[project.services.length - 1]

        //adicionando um id unico a esses serviços
        lastService.id = uuidv4()

        //acessando o custo do ultimo serviço
        const lastServiceCost = lastService.cost

        //acessando o custo atual do projeto
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //verificando se passou do valor maximo atual
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setTypeMsg('error')
            //eliminando o serviço
            project.services.pop()

            //terminar a execução
            return false
        }

        //adicionando o custo do serviço para o custo total do projeto
        project.cost = newCost

        //atualizando o projeto
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH', //atualização
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),//porque estao sendo enviados dados para att
        }).then((resp) => resp.json())//transformando os dados em json
          .then((data) => {//acesso aos dados

                //exibindo os serviços
                setServices(data.services)
                setShowServiceForm(!showServiceForm)
                setMessage('Serviço adicionado com sucesso!')
                setTypeMsg('success')
          })
    
    }

    //função para remover serviço
    function removeService(id, cost){
            
            //criando uma atualização de serviços
            const servicesUpdated = project.services.filter(
                (service) => service.id !== id,
            )

            //atualizando projeto
            const projectUpdated = project

            projectUpdated.services = servicesUpdated

            projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

            //acessando a url e o json para a atualização
            fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectUpdated),
            })
            .then((resp) => resp.JSON())//transformando os dados recebidos em json
              .then((data) =>{//fazendo algo com os dados recebidos

                    setProject(projectUpdated)
                    setServices(servicesUpdated)

                    setMessage('Serviço removido com sucesso!')
                    setTypeMsg('success')

              }).catch((err) => console.log(err))//msg se caso ocorrer algum erro
    }

    //setando a exibição do formulario do projeto
    function toggleProjectForm(){

            //se ta true, vira false e se ta false, vira true
            setShowProjectForm(!showProjectForm)
    }

    //setando a exibição do formulario de serviço 
    function toggleServiceForm(){
           setShowServiceForm(!showServiceForm)
    }


    return(
        <>  
            {/**Se existe projeto, entao exiba os detalhes do projeto */}
            {project.name ? (

                <div className={styles.project_details}>
                    {/**exibindo detalhes do projeto */}
                    <Container customClass="column">

                        {/**quando algo for alterado no projeto */}
                        {message && <Message type={typeMsg} msg={message} />}

                        <div className={styles.details_container}>

                            <h1>
                                Projeto: {project.name}
                            </h1>

                                {/**exibindo detalhes do projeto na tela */}
                                {!showProjectForm ? (

                                    <div  className={styles.form}>
                                        <p>
                                            <span> Categoria: </span> {project.category.name}
                                        </p>

                                        <p>
                                            <span>Total do Orçamento: </span>  R$ {project.budget}
                                        </p>

                                        <p>
                                            <span>Total Utilizado: </span>  R$ {project.cost}
                                        </p>

                                        <button className={styles.btn} onClick={toggleProjectForm}>

                                            {/**se o project form nao estiver sendo exibido */}
                                            {!showProjectForm ? 'Editar projeto' : 'Fechar'}

                                        </button>

                                    </div>

                                ) : (

                                    <div className={styles.form}>
                                        <ProjectForm handleSubmit={editPost} 
                                        btnText="Concluir edição" 
                                        projectData={project} />
                                    </div>

                                )}

                        </div>

                        {/**serciços */}
                        <div className={styles.service_form_container}>

                            <h2> Adicione um serviço: </h2>

                            <button className={styles.btn} onClick={toggleServiceForm}>

                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}

                            </button>

                            {/**Setando o formulario de serviços */}
                            <div className={styles.form}>{
                                
                                showServiceForm && (
                                    <ServiceForm 
                                    handleSubmit={createService}
                                    btnText="Adicionar Serviço"
                                    projectData={project}
                                    />
                                ) 

                            }

                            </div>
                            
                        </div>

                        <h2> Serviços: </h2>

                        <Container customClass="start">

                            {/**exibindo os serviços adicionados ao projetos */}
                            {services.length > 0 &&

                                services.map((service) => (
                                    <ServiceCard 

                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.key}
                                        handleRemove={removeService}

                                    />
                                ))
                            
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados!</p>}

                        </Container>

                    </Container>
                </div>

            ):(//senao exiba tela de carregamento
                <Loading />
            )}
        </>
    )
}

export default Project