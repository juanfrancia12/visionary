import { Navigate, Outlet } from "react-router-dom"

type Props = {
  isAllowed: boolean | null
  redirectTo?: string
  children?: any
}

// JSX.Element | JSX.Element[]

export const ProtectedRoute = ({
  isAllowed = false,
  redirectTo = "/login",
  children,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }

  return children ? children : <Outlet />
}
