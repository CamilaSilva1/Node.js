//JS criado por Camila Silva em 16/02/2022
//Js para armazenar os furmularios dos projetos criados pelo usuario 

//layouts
import styles from '../layouts/ProjectForm.module.css'

//js
import Input from '../form/Input.js'
import Select from '../form/Select.js'
import SubmitBtn from '../form/SubmitBtn'

//bibliotecas
import {useEffect, useState} from 'react'

//função para o formulario do projeto
function ProjectForm({handleSubmit, btnText, projectData}){

    //puxando variaveis do useState
    const [categories, setCategories] = useState([])

    const[project, setProject] = useState(projectData || {})

    //Estou utilizando o useEffet para renderizar os dados apenas uma vez
    useEffect(() =>{
        //fazendo um request da api criada no json
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())//transformando os dados em json
        .then((data) => {
            setCategories(data)//atribuindo os dados em json para a variavel criada
        })//pegando os dados  em json
        .catch((err) => console.log(err))//imprimindo um possivel erro no request
    }, [])

    //enviando os dados
    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    //alterando o nome do projeto de forma dinamica
    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
       
    }

    //alterando e salvando a categoria de forma dinamica
    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
        
    }

    return(
        <form onSubmit={submit} className={styles.projectform}>{/**Enviar em forma de formulário */}

            {/**Chamando input de forma dinamica de um arquivo externo */}
            <Input type="text" text="Nome do Projeto" name="name" 
                    placeholder="Insira o nome do projeto" 
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                    /> 
            
            {/**Chamando input de forma dinamica de um arquivo externo */}
            <Input type="number" text="Orçamento do projeto" name="budget" 
                    placeholder="Insira o orçamento total"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                     />
            
            {/**Chamando select de forma dinamica de um arquivo externo */}
            <Select name="category_id" text="Selecione a categoria"
                     options={categories} 
                     handleOnChange={handleCategory}
                     value={project.category ? project.category.id : ''}//se a categoriaestiver preenchida eu passo o valor dela senao passo valor vazio
                     />
           
            {/**Chamando botão submit de forma dinamica de um arquivo externo */}
            <SubmitBtn text={btnText}/>

        </form>
    )
}

export default ProjectForm