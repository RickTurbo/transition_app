import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
