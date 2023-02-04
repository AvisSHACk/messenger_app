const NavBar = ({navbarisActive}) => {
    return(
        <nav className={navbarisActive ? 'Navbar active' : 'Navbar'}>
            <img className="Navbar__profile" src="https://picsum.photos/50" alt="" />
            {/* <a href="">Editar Perfil</a> */}
        </nav>
    )
}

export default NavBar;