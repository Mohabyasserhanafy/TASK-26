import "./Navbar.css"

const NavBar = () => {
  return (
    <nav class="navbar">
      <a href="#" class="logo">
        <img src="./logo.png" alt="Logo" class="logo-image" />
      </a>
      <ul class="nav-links">
        <li><a href="#" class="nav-item">HOME</a></li>
        <li class="dropdown">
          <a href="#" class="nav-item active">
            PAGES <i class="fa-solid font-angle-down fa-chevron-down arrow-icon"></i>
          </a>
        </li>
        <li><a href="#" class="nav-item">CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default NavBar