import { NavLink } from "react-router-dom"

const Sidebar = (): JSX.Element => {
  return (
    <div className="w-1/5 h-screen sticky top-0 border-r border-gray-200 bg-blue-800 text-white flex flex-col py-12 text-md">
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-900 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/"
      >
        DASHBOARD
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-900 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/"
      >
        ORDENES
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white bg-blue-900 py-4 px-4"
            : "text-gray-300 py-4 px-4"
        }
        to="/albumns"
      >
        ALBUMN
      </NavLink>
    </div>
  )
}

export default Sidebar
