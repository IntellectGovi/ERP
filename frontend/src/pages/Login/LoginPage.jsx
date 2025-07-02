import { useState } from "react";
import StudentSvg from "../../components/svg/Student";
import { Dropdown } from "primereact/dropdown";
import ReactSelect from "../../components/ReactSelect/ReactSelect";
const LoginPage = () => {
  return (
    <div className="loginMain">
      <LoginTile />
    </div>
  );
};

const LoginTile = () => {
  const [values, setValues] = useState({});
  const roles = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const handleInputChange = (e, name) => {
    const { value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (value) => {};

  return (
    <>
      <div className="login-wrapper bg-white">
        <div className="login-card">
          <div className="login-icon-wrapper">
            <div className="login-icon">
              <StudentSvg />
            </div>
          </div>
          <h2 className="login-title">Sign in with email</h2>
          <p className="login-subtitle">Welcome to the ERP</p>
          <form className="login-form">
            <ReactSelect values={values} setValues={setValues} />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={values?.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            {/* <div className="login-password-wrapper"> */}
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) => handleInputChange(e, "password")}
            />
            {/* </div> */}
            <div className="forgot-link">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">
              Get Started
            </button>
          </form>
          <div className="separator">
            <span>Or sign in with</span>
          </div>
          <div className="social-icons">
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
              />
            </button>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </button>
            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733590.png"
                alt="Apple"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
