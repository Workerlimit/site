import './App.css';
import Content from "./components/Content";
import "./style/media.scss";
import "./style/style.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Content />
      </Router>
    </div >
  );
}

export default App;
