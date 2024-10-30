import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layouts/LayoutOne'
import Home from './Pages/Home'

function App() {

  const Sports = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />} >
          <Route index element={<Home />} />
        </Route>
      </Route >
    )
  )
  return (
    <>
      <RouterProvider router={Sports} />
    </>
  )
}

export default App
