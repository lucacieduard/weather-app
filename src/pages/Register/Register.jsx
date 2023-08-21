import React, { useState } from "react";
import styles from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const nume = e.target[0].value;
    const prenume = e.target[1].value;
    const oras = e.target[2].value;
    const email = e.target[3].value;
    const parola = e.target[4].value;
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        parola
      );

      await setDoc(doc(db, "users", response.user.uid), {
        uid: response.user.uid,
        nume: nume,
        prenume: prenume,
        email: email,
        oras: oras,
      });

      await setDoc(doc(db, "favorites", response.user.uid), {
        favoriteCity: [],
      });

      navigate("/");
    } catch (error) {
      setError("Ceva nu a mers bine!");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formLabelContainer}>
          <label id="nume" htmlFor="nume">
            Nume
          </label>
          <input
            type="text"
            id="nume"
            name="nume"
            placeholder="Ex : Popescu"
          ></input>
        </div>
        <div className={styles.formLabelContainer}>
          <label id="prenume" htmlFor="prenume">
            Prenume
          </label>
          <input
            type="text"
            id="prenume"
            name="prenume"
            placeholder="Ex : Eduard"
          ></input>
        </div>

        <div className={styles.formLabelContainer}>
          <label id="oras" htmlFor="oras">
            Orasul tau
          </label>
          <input
            type="text"
            id="oras"
            name="oras"
            placeholder="Ex : Iasi "
          ></input>
        </div>
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

        <button>Creează cont!</button>
      </form>
      <p>
        Ai deja un cont? Conectează-te aici <Link to="/conectare">aici</Link>
      </p>
    </div>
  );
};

export default Register;
