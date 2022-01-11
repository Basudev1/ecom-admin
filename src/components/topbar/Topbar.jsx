import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings onClick={handleLogout} />
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
