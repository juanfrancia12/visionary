import { NavLink, Outlet } from "react-router-dom"

const AuthView = (): JSX.Element => {
  return (
    <section className="container-section min-h-screen flex justify-center items-center">
      <div className="md:w-5/6 m-auto bg-white border border-gray-200 flex rounded-lg overflow-hidden w-full flex-col md:flex-row">
        <div className="w-full md:w-3/6 bg-blue-800/80 p-8 flex flex-col justify-center items-center gap-8 text-white">
          <h1 className="text-5xl font-bold">BIG DATA</h1>
          <p className="text-xl">
            Inicia sesión o registrate para ver las gráficas
          </p>
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive
                ? "w-max button button__ghost font-semibold !rounded-full !px-12 hidden"
                : "w-max button button__ghost font-semibold !rounded-full !px-12 block"
            }
          >
            LOGIN
          </NavLink>
          <NavLink
            to="/auth/register"
            className={({ isActive }) =>
              isActive
                ? "w-max button button__ghost font-semibold !rounded-full !px-12 hidden"
                : "w-max button button__ghost font-semibold !rounded-full !px-12 block"
            }
          >
            REGISTER
          </NavLink>
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default AuthView
