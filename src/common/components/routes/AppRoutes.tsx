import Spinner from "@atoms/spinner"
import { getToken as getTokenUser } from "@helpers/auth.helper"
import FormLogin from "@modules/auth/components/FormLogin"
import FormRegister from "@modules/auth/components/FormRegister"
import NavBar from "@modules/home/components/NavBar"
import LoginPage from "@pages/auth"
// import FactOrdenPage from "@pages/fact_orden"
import HomePage from "@pages/home"
// import LandingPage from "@pages/landing"
import { lazy, Suspense } from "react"
import {
  BrowserRouter as Router,
  Navigate,
  NavLink,
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

const Sidebar = (): JSX.Element => {
  return (
    <div className="w-1/5 h-screen sticky top-0 border-r border-gray-200 bg-blue-800 text-white flex flex-col gap-12 p-12">
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white border-b border-gray-200 text-center"
            : "text-gray-300 text-center"
        }
        to="/"
      >
        DASHBOARD
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white border-b border-gray-200 text-center"
            : "text-gray-300 text-center"
        }
        to="/factorden"
      >
        ORDENES
      </NavLink>

      {/* <Link to="/profile">PROFILE</Link>
      <Link to="/history">history</Link>
      <Link to="/factorden">ORDENES</Link> */}
    </div>
  )
}

const Layout = ({ children }: any): JSX.Element => {
  return <div className="flex-grow text-gray-500 bg-gray-100">{children}</div>
}

const FactordenPage = lazy(async () => await import("@pages/fact_orden"))
// const LoginPage = lazy(async () => await import("@pages/login"))

export function AppRoutes(): JSX.Element {
  // const getToken = false
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

                {/* // ??? RUTAS PRIVADAS PARA TODOS LOS USUARIOS */}
                {/* <Route element={<ProtectedRoute isAllowed={getToken} />}>
                  <Route index element={<HomePage />} />
                  <Route path="/profile" element={<div>PROFILE PAGE</div>} />
                  <Route
                    path="/history"
                    element={<div>HISTORIAS DEL USUARIO PAGE</div>}
                  />
                  <Route
                    path="/suggestions"
                    element={
                      <div>TODAS LAS SUGERENCIAS DEL ESTUDIANTE O DOCENTE</div>
                    }
                  />
                  <Route
                    path="/dashboard"
                    element={<div>Dashboard (Private)</div>}
                  />
                </Route> */}

                <Route element={<ProtectedRoute isAllowed={getToken} />}>
                  <Route path="/" element={<NavBar />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<div>PROFILE</div>} />
                    <Route
                      path="/history"
                      element={<div>HISTORIAS DEL USUARIO PAGE</div>}
                    />
                    <Route path="/factorden" element={<FactordenPage />} />
                    <Route
                      path="/dashboard"
                      element={<div>Dashboard (Private)</div>}
                    />
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
