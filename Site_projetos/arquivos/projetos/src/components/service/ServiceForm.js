/*Criado por Camila Silva em 25/02/2022*/
/*Pagina para exibir o formulario dos serviços existentes no projeto*/

//estilo
import styles from '../layouts/ProjectForm.module.css'

//bibliotecas
import {useState} from 'react'
import Input from '../form/Input'
import SubmitBtn from '../form/SubmitBtn'

function ServiceForm({handleSubmit, btnText, projectData}){

    //alterando os estados dos serviços
    const [service, setService] = useState({})

    //função de enviar as informações
    const submit = (e) => {

        e.preventDefault()

        //alterando o serviço, adicionando os novos serviços inseridos pelo usuario
        projectData.services.push(service)
        handleSubmit(projectData)

    }

    //formando os objetos com os dados que forem inseridos
    function handleChange(e){

            setService({ ...service, [e.target.name]: e.target.value})
    }
    
    return(
        <form onSubmit={submit} className={styles.form}>
            
            <Input 
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />

            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o custo total do serviço"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Insira a descrição do serviço"
                handleOnChange={handleChange}
            />

            <SubmitBtn text={btnText} />

        </form>
    )
}


export default ServiceForm