
//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'


// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from "./components/Login/Login"
import Header from "./components/Header/Header.jsx"
import Store from "./components/Store/Store.jsx"
import Navba from "./components/Navba"

import './App.css'
// import Login from "./components/Login/Login.jsx"
// import {Outlet} from "react-router-dom"
function App() {
 

  return (
    <>
    {/* <Login></Login> */}
    <Header></Header>
    <Store></Store>
    <Navba></Navba>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
   <Header></Header>
      <Store></Store>
   <Navba></Navba>
   {/* <Login></Login> */}
   {/* <Outlet></Outlet>  */}
</>
  )
}

export default App;
