import { getToken as getTokenUser } from "@helpers/auth.helper"
import { Suspense } from "react"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import Spinner from "@atoms/spinner"
import LoginPage from "@pages/auth"
import FormLogin from "@modules/auth/components/FormLogin"
import FormRegister from "@modules/auth/components/FormRegister"

const Error404 = (): JSX.Element => {
  return <div>ERROR 404</div>
}

const UnauthorizedPage = (): JSX.Element => {
  return <div>Unauthorized page</div>
}

const Sidebar = (): JSX.Element => {
  return <div className="w-1/6">SIDEBAR ITEMS</div>
}

const Layout = ({ children }: any): JSX.Element => {
  return <div className="flex-grow">{children}</div>
}

// const Error404 = lazy(() => import("@pages/Error/404"))
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
                <Route index element={<div>Landing Page (Public)</div>} />
                {/* // ??? RUTAS PRIVADAS PARA TODOS LOS USUARIOS */}
                <Route element={<ProtectedRoute isAllowed={getToken} />}>
                  <Route
                    index
                    element={<div className="">USUARIO (Private )</div>}
                  />
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
                </Route>

                {/* <Route
                  path="/"
                  element={
                    <ProtectedRoute
                      redirectTo="/auth/login"
                      isAllowed={getToken}
                    >
                      <div className="">
                        USUARIO (Private & permission 'crear')
                      </div>
                    </ProtectedRoute>
                  }
                /> */}
                <Route
                  path="/auth"
                  element={<Navigate to={"/auth/login"} replace />}
                />
                {/* <Route
                  path="/"
                  element={<Navigate to={"/auth/login"} replace />}
                /> */}
                {/* // ??? RUTAS PUBLICAS */}

                <Route path="auth" element={<LoginPage />}>
                  <Route path="login" element={<FormLogin />} />
                  <Route path="register" element={<FormRegister />} />
                </Route>
                {/* <Route index element={<HomePage />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}

                {/* // ??? RUTAS PRIVADAS DE ACUERDO AL PERMISO DEL USUARIO */}
                {/* <Route
                  path="/"
                  element={
                    <ProtectedRoute
                      redirectTo="/auth/login"
                      isAllowed={getToken}
                    >
                      <div className="">
                        USUARIO (Private & permission 'crear')
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/food/edit"
                  element={
                    <ProtectedRoute redirectTo="/home" isAllowed={getToken}>
                      <div className="">
                        Profile (Private & permission 'editar')
                      </div>
                    </ProtectedRoute>
                  }
                /> */}
                {/* // ??? RUTAS PRIVADAS DE ACUERDO AL ROL DEL USUARIO */}
                {/* <Route
                  path="/admin"
                  element={
                    <ProtectedRoute redirectTo="/home" isAllowed={getToken}>
                      <div className="">
                        Admin (Private & permission 'estudiante')
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute redirectTo="/home" isAllowed={getToken}>
                      <div className="">
                        Admin (Private & permission 'docente')
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute redirectTo="/home" isAllowed={getToken}>
                      <div className="">
                        Admin (Private & permission 'encargado-obu')
                      </div>
                    </ProtectedRoute>
                  }
                /> */}
                {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
                {/* // ??? RUTA PUBLICA */}
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
