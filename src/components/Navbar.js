import Logout from "./elements/Logout";

const NavBar = ({navbarisActive}) => {
    return(
        <nav className={navbarisActive ? 'Navbar active' : 'Navbar'}>
            <img className="Navbar__profile" src="https://picsum.photos/50" alt="" />
            <Logout />
        </nav>
    )
}

export default NavBar;