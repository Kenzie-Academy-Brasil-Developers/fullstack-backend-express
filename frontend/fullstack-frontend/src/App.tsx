import GlobalStyle from './styles/GlobalStyle'
import { RoutesMain } from './routes'
import { AuthProvider } from './providers/AuthProvider'

function App() {

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </> 
  )
}

export default App