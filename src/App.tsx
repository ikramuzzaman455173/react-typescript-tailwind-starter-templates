import { Outlet } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"

const App= () => {
  return (
    <>
      <MainLayout>
        <Outlet/>
    </MainLayout>
    </>
  )
}

export default App