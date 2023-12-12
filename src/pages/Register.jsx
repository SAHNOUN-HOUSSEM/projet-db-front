import RegisterForm from "../components/Register/RegisterForm";
import Logo from "../pictures/logo.png";

export default function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <img src={Logo} alt="logo" className="img-fluid w-100" />
        </div>
        <div className="col-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
