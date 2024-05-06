import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import { Login,SignUp,Netflix,PlayScreen,Movie } from './Components/Pages/index'

function App() {
  return (
<>
<Router>
  <Routes>
<Route exact path='/login' element={<Login/>}/>
<Route exact path='/signup' element={<SignUp/>}/>
<Route exact path='/' element={<Netflix/>}/>
<Route exact path='/play' element={<PlayScreen/>}/>
<Route exact path='/movies' element={<Movie/>}/>
  </Routes>
</Router>
</>
  )
}

export default App
