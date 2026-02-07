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
  try {
    const res = await fetch(
      "https://auth-backend-o0j6.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      setMessage("✅ Registration successful! Please login.");
    } else {
      setMessage(data.message || "❌ Registration failed");
    }
  } catch (error) {
    setMessage("❌ Server error. Try again later.");
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
