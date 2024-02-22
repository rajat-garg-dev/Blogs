import { Link } from "react-router-dom";
import "./topBar.css";

export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i></div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="data:image/jpeg;base64,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" alt=""></img>
                    ):(
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        
                       
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
