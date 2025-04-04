import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading'

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleLogout = async () => {
        try {
            await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
            dispatch(removeUser());
            navigate("/login");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return  (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">🧑‍💻 DevTinder</Link>
                </div>
                <div>
                    <Link to='/' className='mr-5 hover:text-blue-300'>Home</Link>
                </div>
                <div className="flex gap-2">
                    {user && (
                        <>
                            <div className="mt-2">Welcome, {user.firstName}</div>
                            <div className="dropdown dropdown-end mx-5">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Profile" src={user.photourl} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                                >
                                    <li>
                                        <Link to="/profile" className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link to="/connections">Connections</Link></li>
                                    <li><Link to="/requests">Requests</Link></li>
                                    <li onClick={handleLogout}><Link to="#">Logout</Link></li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
