import "./topbar.css";
import {Context} from '../../context/Context'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";


export default function TopBar() {
  const [search, setSearch] = useState("")
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSearch = () => {
    window.location.replace("/?user="+search)
  }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <div className="topSearch">
        <input className="topSearchInput" type="text" placeholder="Search User" onChange={(e) => setSearch(e.target.value)}/>
        <i className="topSearchIcon fas fa-search" onClick={handleSearch}></i>
        </div>
      </div>
    </div>
  );
}
