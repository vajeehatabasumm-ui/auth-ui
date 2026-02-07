import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
  if (!name || !email || !password) {
    setMessage("All fields are required");
    return;
  }

  try {
    const res = await fetch(
      "https://auth-backend-o0j6.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Registration failed");
      return;
    }

    setPassword(""); // ✅ forget password
    setMessage("✅ Registration successful! Redirecting to login...");
    setTimeout(() => navigate("/"), 1500);
  } catch (err) {
    setMessage("❌ Server error");
  }
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
