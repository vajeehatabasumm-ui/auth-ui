import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    // 🔹 get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔹 add new user
    users.push({ name, email, password });

    // 🔹 save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // 🔹 show success message
    setMessage("✅ Registration successful! Please login.");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>Registration</h2>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

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
