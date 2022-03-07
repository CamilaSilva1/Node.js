//JS criado por Camila Silva em 09/02/2022
//JS main do site
//App.js para a construção de um site de armazenamento para o controle de projetos e seus gastos

//bibliotecas
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//paginas
import Home from './components/pages/Home.js';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact.js';
import Projects from './components/pages/Projects.js';
import Project from './components/pages/Project.js';

//layouts
import Container from './components/layouts/Container.js';
import NavBar from './components/layouts/NavBar.js'
import Footer from './components/layouts/Footer.js'

function App() {
  return (
    <Router>

       <NavBar />

    {/*alterar as paginas do projeto*/}
    <Container customClass="min_height">

        <Routes>

            <Route exact path='/' element={<Home />} />

            <Route path='/projects' element={<Projects />} /> 

            <Route path='/company' element={<Company />} /> 

            <Route path='/contact' element={<Contact />} /> 

            <Route path='/NewProject' element={<NewProject />} /> 

            <Route path='/project/:id' element={<Project />} /> 

        </Routes>

    </Container>

    <Footer />

 </Router>
  );
}

export default App;
