import './App.css'
import AppRouter from './Router'

// Define o componente principal da aplicação, App.
function App(): JSX.Element {
  return (
    // Renderiza o componente AppRouter, que contém todas as rotas da aplicação.
    <div className="App">
      <AppRouter />
    </div>
  )
}

// Exporta o componente App.
export default App