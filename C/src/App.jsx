import { useState } from "react";
import Welcome from "./component/Welcome";
import Login from "./component/Login";

export default function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      {userEmail ? (
        <Welcome email={userEmail} logout={() => setUserEmail("")} />
      ) : (
        <Login onSuccess={(email) => setUserEmail(email)} />
      )}
    </>
  );
}
