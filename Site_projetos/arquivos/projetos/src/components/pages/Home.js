//JS criado por Camila Silva em 09/02/2022
//Pagina main do site

//layouts
import styles from '../layouts/Home.module.css'
import LinkButton from '../layouts/LinkButton.js'

function Home (){
    return(
        <section className={styles.home_container}>
            <h1> Bem-vindo ao <span> Gerenciador de Projetos </span></h1>
            <p> Comece a gerenciar os seus projetos!</p>
            <LinkButton to="/NewProject" text="Criar Projeto" />
        </section>
    )
}

export default Home