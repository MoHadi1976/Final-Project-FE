import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Homepage</Link>
                <Link to="/signup">Sign-up</Link>
                <Link to="/login">Login</Link>
                {user && <Link to="/notifications">
                    {user.notifications ? user.notifications.length : 0}
                </Link>}

            </div>
        </nav>
    );
}

export default Navbar;