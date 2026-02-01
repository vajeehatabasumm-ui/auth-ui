import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    setMessage("✅ Registration successful! Please login.");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Registration</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="button" onClick={handleRegister}>
          Register
        </button>

        {message && <p style={{ color: "#90ee90" }}>{message}</p>}

        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
