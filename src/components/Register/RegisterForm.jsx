import { useEffect, useRef, useState } from "react";
import styles from "./Register.module.css";
import { postData } from "../../API/utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function RegisterForm() {
  const navigate = useNavigate();

  const errRef = useRef();
  const userRef = useRef();

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phone, setPhone] = useState();

  const [maladies, setMaladies] = useState([]);

  const [errMsg, setErrMsg] = useState("");

  const handleRegisterFormSubmit = async (e) => {
    e.preventDefault();

    const check = PWD_REGEX.test(password);
    if (!check) {
      setErrMsg(
        "8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character."
      );
      return;
    }
    const client = {
      nom_client: lastName,
      prenom_client: firstName,
      passwordd: password,
      mail: email,
      maladie_allergie: maladies,
      tel: phone,
    };

    try {
      const registerData = { client };
      const response = await postData("/clients/register", registerData);
      navigate("/login");
    } catch (err) {
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

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, password, matchPwd]);

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
          <label htmlFor="lastName">Nom</label>
          <input
            ref={userRef}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">
            E-mail
            <FontAwesomeIcon
              icon={faCheck}
              className={validEmail ? styles["valid"] : "d-none"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validEmail || !email ? "d-none" : styles["invalid"]}
            />
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="phone">Téléphone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">
            Mot de Passe
            <FontAwesomeIcon
              icon={faCheck}
              className={validPassword ? styles["valid"] : "d-none"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={
                validPassword || !password ? "d-none" : styles["invalid"]
              }
            />
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p
            id="pwdnote"
            className={
              pwdFocus && !validPassword ? styles["instructions"] : "d-none"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            8 to 24 characters.
            <br />
            Must include uppercase and lowercase letters, a number and a special
            character.
            <br />
            Allowed special characters:
            <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span>
            <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span>
            <span aria-label="percent">%</span>
          </p>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="passwordMatch">
            Verification Mot de Passe
            <FontAwesomeIcon
              icon={faCheck}
              className={validMatch && matchPwd ? styles["valid"] : "d-none"}
            />
            <FontAwesomeIcon
              icon={faTimes}
              className={validMatch || !matchPwd ? "d-none" : styles["invalid"]}
            />
          </label>
          <input
            type="password"
            id="passwordMatch"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p
            id="confirmnote"
            className={
              matchFocus && !validMatch ? styles["instructions"] : "d-none"
            }
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Must match the first password input field.
          </p>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="allergie">Allergies</label>
          <input
            type="text"
            id="allergie"
            name="allergie"
            value={maladies}
            onChange={(e) => setMaladies(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <button
            type="submit"
            disabled={
              !firstName ||
              !lastName ||
              !validEmail ||
              !phone ||
              !validPassword ||
              !validMatch ||
              !maladies
            }
          >
            Save
          </button>
        </div>
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          <NavLink to={"/login"} className={styles["line"]}>
            Se connecter
          </NavLink>
        </span>
      </p>
    </>
  );
}
