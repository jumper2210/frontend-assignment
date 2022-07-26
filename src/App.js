import { Home } from './containers/Home/Home'
import { ArticlesProvider } from './contexts/ArticlesContext'

function App() {
  return (
    <ArticlesProvider>
      <Home />
    </ArticlesProvider>
  )
}

export default App
