import { Outlet } from "react-router-dom"
import Header from "./compo/Header"

function App() {

  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default App
