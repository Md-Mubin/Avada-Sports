// ===================== All Imports
import                './App.css'
import Home      from './Pages/Home'
import LayoutOne from './Layouts/LayoutOne'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

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
