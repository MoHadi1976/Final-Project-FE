import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Homepage</Link>
                <Link to="/signup">Sign-up</Link>
                <Link to="/login">Login</Link>

            </div>
        </nav>
    );
}

export default Navbar;