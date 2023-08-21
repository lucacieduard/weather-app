import React from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const parola = e.target[1].value;

    try {
      const response = await signInWithEmailAndPassword(auth, email, parola);
      console.log(response);
      navigate("/");
      toast.success(`Bine ai revenit`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formLabelContainer}>
          <label id="email" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Introdu adresa de email ... "
          ></input>
        </div>
        <div className={styles.formLabelContainer}>
          <label id="password" htmlFor="password">
            Parola
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Introdu parola"
          ></input>
        </div>

        <button>Conectare</button>
      </form>
      <p>
        Nu ai un cont? Inregistrează-te aici{" "}
        <Link to="/inregistrare">aici</Link>
      </p>
    </div>
  );
};

export default Login;
