const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-list-item">
                <a className="nav-list-item-link" href='/'>Profile</a>
            </div>
            <div className="nav-list-item">
                <a className="nav-list-item-link" href='/'>Messages</a>
            </div>
            <div className="nav-list-item">
                <a className="nav-list-item-link" href='/'>News</a>
            </div>
            <div className="nav-list-item">
                <a className="nav-list-item-link" href='/'>Music</a>
            </div>
            <div className="nav-list-item">
                <a className="nav-list-item-link" href='/'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;