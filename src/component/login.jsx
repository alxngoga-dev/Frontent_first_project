import React, { useState } from "react";
import "../assets/Style/login.css"
import { FiMail, FiLock, FiEye, FiEyeOff, } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="logo">
          miniture<span>.</span>
        </h1>

        <h2>Welcome back 👋</h2>
        <p>Please sign in to your account</p>

        <form>

          <div className="input-group">
            <label>Email address</label>
            <div className="input-wrapper">
              <FiMail className="icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>


          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <FiLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/">Forgot password?</a>
          </div>

          {/* Sign In */}
          <button className="signin-btn">Sign in</button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          {/* Social Login */}
          <div className="social-buttons">
            <button type="button" className="social-btn">
              <FcGoogle size={20} />
              Google
            </button>

            <button type="button" className="social-btn">
              <FaApple size={20} />
              Apple
            </button>
          </div>

          <div className="signup-text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
