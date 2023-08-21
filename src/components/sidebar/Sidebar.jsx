import classes from "./sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudBolt,
  faTableCellsLarge,
  faBookmark,
  faArrowRightToBracket,
  faUserPlus,
  faXmark,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Sidebar = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div
      className={`${classes.sidebar} ${
        props.showNav ? "" : `${classes.hide_side}`
      }`}
    >
      <div className={classes.sidebar_header}>
        <FontAwesomeIcon icon={faCloudBolt} className={classes.logo} />
        <h1 className={classes.logo_text}>meTEO</h1>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => props.changeShowSideBar()}
          className={`${classes.xmark} ${classes.hide}`}
        />
      </div>
      <div className={classes.sidebar_content}>
        <ul className={classes.sidebar_navigation}>
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
            className={({ isActive, isPending }) => {
              return isActive ? `${classes.activeLink}` : "";
            }}
          >
            <li>
              <FontAwesomeIcon icon={faTableCellsLarge} />
              <p>Acasă</p>
            </li>
          </NavLink>
          <li>
            <FontAwesomeIcon icon={faBookmark} />
            <p>Orase salvate</p>
          </li>
        </ul>
      </div>
      <div className={classes.sidebar_footer}>
        <ul className={classes.sidebar_navigation}>
          {!ctx.user && (
            <>
              <NavLink
                to="/conectare"
                style={{ textDecoration: "none", color: "inherit" }}
                className={({ isActive, isPending }) => {
                  return isActive ? `${classes.activeLink}` : "";
                }}
              >
                <li>
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                  <p>Intra in cont</p>
                </li>
              </NavLink>
              <NavLink
                to="/inregistrare"
                style={{ textDecoration: "none", color: "inherit" }}
                className={({ isActive, isPending }) => {
                  return isActive ? `${classes.activeLink}` : "";
                }}
              >
                <li>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <p>Creeaza un cont</p>
                </li>
              </NavLink>
            </>
          )}
          {ctx.user && (
            <li
              onClick={() => {
                signOut(auth);
                toast.success("Te-ai deconectat cu succes!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <p>Deconectare</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
