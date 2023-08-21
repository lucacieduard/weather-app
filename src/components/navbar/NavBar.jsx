import classes from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import InputSearch from "./InputSearch";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

const NavBar = (props) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className={classes.navBar}>
      <div className={`${classes.hamburger_icon} ${classes.hide}`}>
        <FontAwesomeIcon icon={faBars} onClick={props.showSideBar} />
      </div>
      <div className={classes.date}>
        {new Date()
          .toLocaleDateString("ro-RO", { weekday: "long" })
          .toLocaleUpperCase()}
        <span className={classes.date_color}>
          {new Date().toLocaleDateString("ro-RO", { day: "numeric" })}{" "}
          {new Date().toLocaleDateString("ro-RO", { month: "long" })},{" "}
          {new Date().toLocaleDateString("ro-RO", { year: "numeric" })}
        </span>
      </div>
      <InputSearch />
      {user && (
        <div className={classes.icon_navbar}>
          <FontAwesomeIcon
            icon={faUser}
            className={classes.icon_navbar_hover}
            onClick={() => setShowProfileMenu(true)}
          />
          {showProfileMenu && (
            <ul className={classes.profile_list}>
              <FontAwesomeIcon
                icon={faXmark}
                className={classes.x}
                onClick={() => setShowProfileMenu(false)}
              />
              <h4 className={classes.profile_name}>Buna {user.prenume} !</h4>
              <li className={classes.option}>Contul meu</li>
              <li className={classes.option}>Orașe salvate</li>
              <li
                className={classes.option}
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
                  setShowProfileMenu(false);
                }}
              >
                Deconectare
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
