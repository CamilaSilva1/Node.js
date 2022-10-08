// Criado por Camila Silva
// Desde 08/10/2022
// Projeto que lista, usando API do tmdb, todos os filmes atuais bem classificados
// Com opção de search e detalhes de cada filme

import { Link, Outlet } from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <nav id="navbar">

        <h2>
          <Link to='/'>Home</Link>
          <Link to='/movie/1'>Movie</Link> 
          <Link to='/search'>Search</Link>
        </h2>

      </nav>
      
      <h1> Movies Lib </h1>

      <Outlet />

    </div>
  )
}

export default App
