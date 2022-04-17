import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THE DEVELOPER</span>
        <img
          src="http://localhost:5000/images/myphoto.png"
          alt=""
        />
        <p>
          Hello visitor! My name is Assylan Akhanuly and I code in React js. This page was created by me to get internship provided by CodiPlay LLC.
          Here you can register, login, write your own post, and visit posts of other users.
          Hope you enjoy with this page
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Personal Information</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Full Name: Assylan Akhanuly</li>
            <li className="sidebarListItem">Date of Birth: 17.11.2000</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
