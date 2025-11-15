export default function Welcome({ email, logout }) {
  return (
    <div className="container">
      <h2>Welcome, {email}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
