import { useEffect, useState } from "react";
import StudentSvg from "../../components/svg/Student";

import { LoginAPI } from "../../networkServices/Login/Login";
import ReactSelect from "../../components/ReactSelect/ReactSelect";

const LoginSignupPage = ({ type }) => {
  return (
    <div className="loginMain">
      <LoginTile type={type} />
    </div>
  );
};

const LoginTile = ({ type }) => {
  const [values, setValues] = useState({});
  console.log("values", values);
  const [roles, setRoles] = useState([]);

  const handleReactSelect = (name, value) => {
    setValues((val) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const roleType = async () => {
    const reponse = LoginAPI();
    setRoles(reponse);
  };

  useEffect(() => {
    roleType();
  }, []);

  const handleInputChange = (e, name) => {
    const { value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (value) => {};

  return (
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
          <ReactSelect
            placeholderName={"Status"}
            name="Status"
            value={values?.Status?.value}
            handleChange={handleReactSelect}
            dynamicOptions={[
              { label: "Admin", value: "1" },
              { label: "Staff", value: "0" },
              { label: "Student", value: "2" },
            ]}
            searchable={false}
          />
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={values?.email}
            onChange={(e) => handleInputChange(e, "email")}
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            onChange={(e) => handleInputChange(e, "password")}
          />
          {type === "registration" && (
            <>
              <input
                type="text"
                placeholder="Username"
                className="login-input"
                onChange={(e) => handleInputChange(e, "Username")}
              />
              <input
                type="text"
                placeholder="Email"
                className="login-input"
                onChange={(e) => handleInputChange(e, "email")}
              />
              <input
                type="text"
                placeholder="New Password"
                className="login-input"
                onChange={(e) => handleInputChange(e, "newPassword")}
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="login-input"
                onChange={(e) => handleInputChange(e, "confirmPassword")}
              />
            </>
          )}
          {/* </div> */}
          {/* <div className="forgot-link">
            <a href="#">Forgot password?</a>
          </div> */}
          <button type="submit" className="login-button">
            {type != "login" ? "Sign Up" : "Login"}
          </button>
          {type === "login" && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                fontSize: "0.875rem",
              }}
            >
              <p className="" style={{ color: "black" }}>
                New User?
              </p>
              <div className="forgot-link">
                <a href="/signup">Sign Up</a>
              </div>
            </div>
          )}
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
  );
};

export default LoginSignupPage;
