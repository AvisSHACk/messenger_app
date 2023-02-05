import Logout from "./elements/Logout";

const NavBar = ({navbarisActive, photoProfile}) => {
    return(
        <nav className={navbarisActive ? 'Navbar active' : 'Navbar'}>
            <img className="Navbar__profile" src={photoProfile} alt="" />
            <Logout />
        </nav>
    )
}

export default NavBar;