
import React, { useState } from "react";
import axios from "axios";
import "../assets/Style/signup.css";

import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [userRole] = useState("user");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstname ||
      !lastname ||
      !email ||
      !password
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      alert(
        "Password must be at least 8 characters"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/v1/userrouter/register",
        {
          firstname,
          lastname,
          email,
          password,
          userRole,
        }
      );

      alert(response.data.message);

      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h1 className="logo">
          SignUp<span>.</span>
        </h1>

        <h2>Create your account</h2>

        <p>
          Fill in the details below to get
          started
        </p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >

          {/* FIRST NAME */}

          <div className="input-group">
            <label>First Name</label>

            <div className="input-wrapper">
              <FiUser className="icon" />

              <input
                type="text"
                placeholder="Enter first name"
                value={firstname}
                onChange={(e) =>
                  setFirstname(e.target.value)
                }
                required
              />
            </div>
          </div>

          {/* LAST NAME */}

          <div className="input-group">
            <label>Last Name</label>

            <div className="input-wrapper">
              <FiUser className="icon" />

              <input
                type="text"
                placeholder="Enter last name"
                value={lastname}
                onChange={(e) =>
                  setLastname(e.target.value)
                }
                required
              />
            </div>
          </div>

          {/* EMAIL */}

          <div className="input-group">
            <label>Email Address</label>

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

          {/* PASSWORD */}

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
                placeholder="Create password"
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

            <small>
              Password must be at least
              8 characters
            </small>
          </div>

          {/* CONFIRM PASSWORD */}

          <div className="input-group">
            <label>Confirm Password</label>

            <div className="input-wrapper">
              <FiLock className="icon" />

              <input
                type={
                  showConfirm
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                required
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowConfirm(
                    !showConfirm
                  )
                }
              >
                {showConfirm ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>
            </div>
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="signup-btn"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          <div className="divider">
            <span>or continue with</span>
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
              <FaApple size={18} />
              Apple
            </button>

          </div>

          <div className="signin-text">
            Already have an account?{" "}
            <Link to="/login">
              Sign In
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Signup;

