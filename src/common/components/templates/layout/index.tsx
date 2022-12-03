import Footer from "./components/Footer"
import Header from "./components/Header"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
