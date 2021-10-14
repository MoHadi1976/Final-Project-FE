import { Link } from "react-router-dom";
const Navbar = ({ user, setUser }) => {
    return (
        <nav className="navbar">
            <div className="links">
            {user && <Link to="/upload/">Upload an Image</Link>}
                {!user && <Link to="/signup">Sign-up</Link>}
                {!user && <Link to="/login">Login</Link>}
                {user && <Link to="/notifications">
                    {user.notifications ? user.notifications.length : 0}
                </Link>}
                {user && <button className="btn" onClick={() => setUser()} >Logout</button>}
            </div>
        </nav>
    );
}

export default Navbar;