import { useState } from "react";
import "./auth.css";

export default function Admin() {
  const [key, setKey] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const ADMIN_KEY = "admin123"; // 🔐 change this

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const checkKey = () => {
    if (key === ADMIN_KEY) {
      setAuthorized(true);
    } else {
      alert("Access denied");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        {!authorized ? (
          <>
            <h2>Admin Access</h2>
            <input
              type="password"
              placeholder="Enter admin key"
              onChange={(e) => setKey(e.target.value)}
            />
            <button onClick={checkKey}>Enter</button>
          </>
        ) : (
          <>
            <h2>Registered Emails</h2>
            {users.length === 0 ? (
              <p>No users registered</p>
            ) : (
              users.map((u, i) => <p key={i}>{u.email}</p>)
            )}
          </>
        )}
      </div>
    </div>
  );
}
