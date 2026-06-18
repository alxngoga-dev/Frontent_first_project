import React, { useState } from "react";
import "../assets/Style/forgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reset Password Email:", email);

    setMessage(
      "If this email exists, a password reset link has been sent."
    );
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h1>Forgot Password</h1>

        <p>Enter your email to reset your password</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="success-message">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;