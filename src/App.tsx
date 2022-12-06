import { AppRoutes } from "@components/routes/AppRoutes"
import { ToastContainer } from "react-toastify"

function App(): JSX.Element {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App
