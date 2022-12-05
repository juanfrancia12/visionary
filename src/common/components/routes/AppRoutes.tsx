import Spinner from "@atoms/spinner"
import { getToken as getTokenUser } from "@helpers/auth.helper"
import FormLogin from "@modules/auth/components/FormLogin"
import FormRegister from "@modules/auth/components/FormRegister"
import NavBar from "@modules/home/components/NavBar"
import Sidebar from "@modules/sidebar"
import AlbumnsPage from "@pages/albumns"
import LoginPage from "@pages/auth"
import FactOrdenPage from "@pages/fact_orden"
// import HomePage from "@pages/home"
// import LandingPage from "@pages/landing"
import { Suspense } from "react"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"

const Error404 = (): JSX.Element => {
  return <div>ERROR 404</div>
}

const UnauthorizedPage = (): JSX.Element => {
  return <div>Unauthorized page</div>
}

const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="w-4/5 flex-grow text-gray-500 bg-gray-100">{children}</div>
  )
}

export function AppRoutes(): JSX.Element {
  const getToken = !(getTokenUser === null)

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <div className="w-full flex">
          {getToken && <Sidebar />}
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Routes>
                {/* {!getToken && <Route index element={<LandingPage />} />} */}

                <Route element={<ProtectedRoute isAllowed={getToken} />}>
                  <Route path="/" element={<NavBar />}>
                    <Route index element={<FactOrdenPage />} />
                    {/* <Route index element={<HomePage />} /> */}
                    <Route
                      path="/dashboard"
                      element={<div>Dashboard (Private)</div>}
                    />
                    <Route path="/albumns" element={<AlbumnsPage />} />
                    {/* <Route path="/factorden" element={<FactOrdenPage />} /> */}
                    <Route path="/profile" element={<div>PROFILE</div>} />
                  </Route>
                </Route>

                <Route
                  path="/auth"
                  element={<Navigate to={"/auth/login"} replace />}
                />

                {/* // ??? RUTAS PUBLICAS */}

                <Route path="auth" element={<LoginPage />}>
                  <Route path="login" element={<FormLogin />} />
                  <Route path="register" element={<FormRegister />} />
                </Route>

                <Route path="/403" element={<UnauthorizedPage />} />
                <Route path="/404" element={<Error404 />} />
                <Route path="*" element={<Navigate to={"/404"} replace />} />
              </Routes>
            </Suspense>
          </Layout>
        </div>
      </Suspense>
    </Router>
  )
}
