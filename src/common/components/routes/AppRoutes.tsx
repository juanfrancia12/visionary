import { getToken as getTokenUser } from "@helpers/auth.helper"
import { lazy, Suspense, useState } from "react"
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { toast } from "react-toastify"

const notify = () => toast("Wow so easy!")

const Error404 = () => {
  return <div>ERROR 404</div>
}

const LoginPage = () => {
  return <div>Login page</div>
}

const UnauthorizedPage = () => {
  return <div>Unauthorized page</div>
}

const HomePage = () => {
  return <button onClick={notify}>Home page cliente jeej</button>
}

// const Error404 = lazy(() => import("@pages/Error/404"))
// const LoginPage = lazy(() => import("@pages/Login"))

export function AppRoutes() {
  // const getToken = false
  const getToken = !!getTokenUser

  return (
    <Router>
      <Suspense fallback={<div>cargando pagina</div>}>
        {/* <Layout> */}
        <Suspense fallback={<div>CARGANDO ....</div>}>
          <Routes>
            // ??? RUTAS PUBLICAS
            {/* <Route index element={<div>Landing Page (Public)</div>} /> */}
            {/* <Route index element={<HomePage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/error-404" element={<Error404 />} />
            <Route path="/error-403" element={<UnauthorizedPage />} />
            // ??? RUTAS PRIVADAS PARA TODOS LOS USUARIOS
            <Route element={<ProtectedRoute isAllowed={getToken} />}>
              <Route path="/home" element={<HomePage />} />
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
            // ??? RUTAS PRIVADAS DE ACUERDO AL PERMISO DEL USUARIO
            <Route
              path="/food/create"
              element={
                <ProtectedRoute redirectTo="/home" isAllowed={getToken}>
                  <div className="">USUARIO (Private & permission 'crear')</div>
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
            />
            // ??? RUTAS PRIVADAS DE ACUERDO AL ROL DEL USUARIO
            <Route
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
                  <div className="">Admin (Private & permission 'docente')</div>
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
            />
            {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
            // ??? RUTA PUBLICA
            <Route path="/404" element={<Error404 />} />
            {/* <Route path="*" element={<Navigate to={"/404"} replace />} /> */}
          </Routes>
        </Suspense>
        {/* </Layout> */}
      </Suspense>
    </Router>
  )
}
