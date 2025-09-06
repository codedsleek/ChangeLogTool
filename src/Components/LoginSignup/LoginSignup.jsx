import { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [mode, setMode] = useState("signin"); 

  return (
    <div className="container">
      <h1 className="title">Change Log Tool</h1>
      <p className="subtitle">
        Sign in to manage your projects and collaborate with your team
      </p>

      <div className="tabs">
        <button
          className={mode === "signin" ? "active" : ""}
          onClick={() => setMode("signin")}
        >
          Sign In
        </button>
        <button
          className={mode === "signup" ? "active" : ""}
          onClick={() => setMode("signup")}
        >
          Sign Up
        </button>
      </div>

      <div className="form">
        <h2>{mode === "signin" ? "Sign In" : "Sign Up"}</h2>
        <p className="form-subtitle">
          {mode === "signin"
            ? "Enter your email and password to access your account"
            : "Create an account to start managing your projects"}
        </p>

        <form>
          {mode === "signup" && (
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="submit-btn">
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
