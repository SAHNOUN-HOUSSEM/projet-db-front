import LoginForm from "../components/Login/LoginForm";
import Logo from "../pictures/logo.png";

export default function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img src={Logo} alt="logo" className="img-fluid w-100" />
        </div>
        <div className="col-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
