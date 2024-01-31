import { Outlet } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout";

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