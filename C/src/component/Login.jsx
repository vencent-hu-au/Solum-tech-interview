import { useState } from "react";

const VALID_USERS = [
  { email: "test@example.com", password: "Password123!" },
  { email: "admin@example.com", password: "Admin123!" }
];

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const validatePassword = (pwd) => {
    if (pwd.length < 8 || pwd.length > 16) return false;
    if (!/[A-Z]/.test(pwd)) return false;
    if (!/[a-z]/.test(pwd)) return false;
    if (!/[0-9]/.test(pwd)) return false;
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd)) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email cannot be empty.");
      return;
    }

    const user = VALID_USERS.find((u) => u.email === email);

    if (!user) {
      setError("Email does not exist.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 8–16 chars, contain uppercase, lowercase, number and symbol."
      );
      return;
    }

    if (password !== user.password) {
      setError("Incorrect password.");
      return;
    }

    // SUCCESS
    onSuccess(email);
  };

  return (
    <div className="container">
      <h2>Login</h2>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <a className="forgot" href="#">Forgot password?</a>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
