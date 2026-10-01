import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Layout/Pages/Home'
import ContactUs from './Layout/Pages/Contact'
import About from './Layout/Pages/About'






function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<WebLayout />}>
      

          <Route index element={<Home/>} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
        
        </Route>


      </>


    )

  )


  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App
