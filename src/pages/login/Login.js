import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    login(dispatch, { email, password });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 10 }}
        name="email"
        type="email"
        defaultValue="Email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 10 }}
        type="password"
        defaultValue="Password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ padding: 10, cursor: "pointer" }} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
