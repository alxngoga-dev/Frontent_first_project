import React, { useState } from "react";
import "../assets/Style/login.css";
import axios from "axios";

import {
FiMail,
FiLock,
FiEye,
FiEyeOff,
} from "react-icons/fi";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import {
Link,
useNavigate,
} from "react-router-dom";

const Login = () => {
const navigate = useNavigate();

const [showPassword, setShowPassword] =
useState(false);

const [email, setEmail] = useState("");
const [password, setPassword] =
useState("");

const [loading, setLoading] =
useState(false);

const handleLogin = async (e) => {
e.preventDefault();


if (!email || !password) {
  alert("Please fill all fields");
  return;
}

try {
  setLoading(true);

  const response = await axios.post(
    "http://localhost:5000/api/v1/userrouter/login",
    {
      email,
      password,
    }
  );

  localStorage.setItem(
    "token",
    response.data.token
  );

  localStorage.setItem(
    "user",
    JSON.stringify(response.data.user)
  );

  const user = response.data.user;

  alert(response.data.message);

  if (user.userRole === "admin") {
    navigate("/dashboard");
  } else {
    navigate("/");
  }

} catch (error) {
  console.log(error);

  alert(
    error.response?.data?.message ||
    "Login failed"
  );
} finally {
  setLoading(false);
}


};

return ( <div className="login-page"> <div className="login-card">

    <h1 className="logo">
      Login<span>.</span>
    </h1>

    <p>Please sign in to your account</p>

    <form onSubmit={handleLogin}>

      <div className="input-group">
        <label>Email address</label>

        <div className="input-wrapper">
          <FiMail className="icon" />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />
        </div>
      </div>

      <div className="input-group">
        <label>Password</label>

        <div className="input-wrapper">
          <FiLock className="icon" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )}
          </button>
        </div>
      </div>

      <div className="options">
        <label className="remember">
          <input type="checkbox" />
          Remember me
        </label>

        <Link to="/forgot-password">
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="signin-btn"
        disabled={loading}
      >
        {loading
          ? "Signing In..."
          : "Sign In"}
      </button>

      <div className="divider">
        <span>
          or continue with
        </span>
      </div>

      <div className="social-buttons">

        <button
          type="button"
          className="social-btn"
        >
          <FcGoogle size={20} />
          Google
        </button>

        <button
          type="button"
          className="social-btn"
        >
          <FaApple size={20} />
          Apple
        </button>

      </div>

      <div className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup">
          Sign up
        </Link>
      </div>

    </form>

  </div>
</div>


);
};

export default Login;
