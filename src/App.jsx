import NavBar from "./components/Navbar/Navbar"
import Experience from "./pages/Experience/Experience"
import Home from "./pages/Home/Home"
import Hosting from "./pages/Hosting/Hosting"
import Support from "./pages/Support/Support"


const App = () => {
  return (
    <div>
      <NavBar />

      <Home />

      <Hosting />

      <Experience />

      <Support />

    </div>
  )
}

export default App