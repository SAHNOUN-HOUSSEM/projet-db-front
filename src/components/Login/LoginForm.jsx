import { useEffect, useRef, useState } from "react";
import styles from "./Register.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../API/axios";

export default function LoginForm() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errRef = useRef();
  const userRef = useRef();

  const [email, setEmail] = useState("sahnoun@gmail.com");
  // const [email, setEmail] = useState("");

  const [password, setPassword] = useState("houssem");
  // const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const handleRegisterFormSubmit = async (e) => {
    e.preventDefault();

    const client = {
      email,
      password,
    };

    try {
      const response = await axios.post("/clients/login", client, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const data = response.data;
      setAuth({ accessToken: data.accessToken, clientId: data.clientId });
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else {
        setErrMsg(err.response.data.error);
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <>
      <p
        ref={errRef}
        className={`${errMsg ? styles["errmsg"] : "d-none"}`}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form onSubmit={handleRegisterFormSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">E-mail</label>
          <input
            ref={userRef}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Mot de Passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <button type="submit" disabled={!email || !password}>
            Save
          </button>
        </div>
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          <NavLink to={"/register"} className={styles["line"]}>
            Créer un compte
          </NavLink>
        </span>
      </p>
    </>
  );
}
