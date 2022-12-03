import { AppRoutes } from "@components/routes/AppRoutes"
// import AppExample from "AppRoute.example"
// import Layout from "example/Layout"
import { ToastContainer } from "react-toastify"

function App(): JSX.Element {
  return (
    <>
      <ToastContainer />
      {/* <AppExample /> */}
      <AppRoutes />
      {/* <Layout /> */}
    </>
  )
}

export default App
