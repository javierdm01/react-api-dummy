import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { Usuarios } from './components/Usuarios'
import { Productos } from './components/Productos'
import { UserData } from './components/UserData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='/usuarios' element={<Usuarios/>}>
          <Route path='/usuarios/:id' element={<UserData/>}/>
        </Route>
        <Route path='/productos' element={<Productos/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
