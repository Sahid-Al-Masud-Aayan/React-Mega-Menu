import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Elements from './Pages/Elements'
import Gallery from './Pages/Gallery'
import Locations from './Pages/Location'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Work from './Pages/Work'
import Layoutone from './Layout/Layoutone'

function App() {
  const mainRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layoutone/>}>
        <Route index element={<Home/>}/>
        <Route path='/element' element={<Elements/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/Location' element={<Locations/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/work' element={<Work/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainRoute}/>
    </>
  )
}

export default App
