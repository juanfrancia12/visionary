import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  NavLink,
} from "react-router-dom"

const AppExample = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />}>
            <Route index element={<div>index del home index</div>} />
            <Route
              path="view-dashboard-home"
              element={<div>view dashboard home</div>}
            />
            <Route
              path="list-users-home"
              element={<div>list users home</div>}
            />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
        <Route path="layout" element={<LayoutPage />} />
      </Routes>
    </Router>
  )
}

const LayoutPage = (): JSX.Element => {
  return (
    <>
      <aside className="h-screen w-1/5 inline-grid bg-blue-200 sticky top-0 overflow-auto">
        SIDEBAR
      </aside>
      <div className="w-4/5 inline-grid bg-green-200">
        <header className="h-20 bg-red-200 sticky top-0">HEADER</header>
        <main className="bg-red-300">MAIN</main>
      </div>
    </>
  )
}

const Layout = (): JSX.Element => {
  const activeClass: string = "font-bold mr-2"
  const inActiveClass: string = "mr-2"

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          About
        </NavLink>
        <NavLink
          to="/layout"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Layout
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0", backgroundColor: "#cccccc" }}>
        <Outlet />
      </main>
    </>
  )
}

const Home = (): JSX.Element => {
  const activeClass: string = "font-bold mr-2"
  const inActiveClass: string = "mr-2"

  return (
    <>
      <h2>Home</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          to="view-dashboard-home"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Ver dashboard - Home
        </NavLink>
        <NavLink
          to="list-users-home"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Ver lista de usuarios - Home
        </NavLink>
      </nav>
      <main style={{ padding: "1rem 0", backgroundColor: "#f3f3f3" }}>
        <Outlet />
      </main>
    </>
  )
}

const About = (): JSX.Element => {
  const activeClass: string = "font-bold mr-2"
  const inActiveClass: string = "mr-2"

  return (
    <>
      <h2>Reportes</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink
          to="list-professor-report"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Ver profesores - Reportes
        </NavLink>
        <NavLink
          to="data-analisis-report"
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          Ver analisis de datos - Reportes
        </NavLink>
      </nav>
    </>
  )
}

export default AppExample
