import "./auth.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2>LOGIN</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <div className="actions">
          <button onClick={() => navigate("/dashboard")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
}
