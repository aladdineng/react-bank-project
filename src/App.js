import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/logIn" component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
