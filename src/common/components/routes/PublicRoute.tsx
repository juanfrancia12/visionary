import { Navigate, Outlet } from "react-router-dom"

const REDIRECT_TO_DEFAULT = "/auth/login"
const IS_ALLOWED_DEFAULT = false

export const PublicRoute = ({
  isAllowed = IS_ALLOWED_DEFAULT,
  redirectTo = REDIRECT_TO_DEFAULT,
  children,
}: Props): JSX.Element => {
  if (isAllowed ?? false) {
    return <Navigate to={redirectTo} replace />
  }

  return children ?? <Outlet />
}

interface Props {
  isAllowed: boolean
  redirectTo?: string
  children?: React.ReactElement
}
