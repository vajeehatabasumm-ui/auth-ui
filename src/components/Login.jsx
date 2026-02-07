import "./auth.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
  if (!email || !password) {
    setError("Email and password are required");
    return;
  }

  try {
    const res = await fetch(
      "https://auth-backend-o0j6.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Login failed");
      return;
    }

    localStorage.setItem("token", data.token); // ✅ STORE TOKEN
    setPassword("");                           // ✅ CLEAR PASSWORD
    navigate("/dashboard");
  } catch (err) {
    setError("❌ Server error");
  }
};


  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>LOGIN</h2>

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

        <div className="actions">
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
