import { Navigate, Outlet } from "react-router-dom"

interface Props {
  isAllowed: boolean | null
  redirectTo?: string
  children?: React.ReactElement
}

// JSX.Element | JSX.Element[]

export const ProtectedRoute = ({
  isAllowed = false,
  redirectTo = "/auth/login",
  children,
}: Props): JSX.Element => {
  if (!(isAllowed ?? false)) {
    return <Navigate to={redirectTo} replace />
  }

  return children ?? <Outlet />
}
