import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Create from "./components/Create/Create";
import Read from "./components/Read/Read";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div class="ui banner">
        <img class = "image"
          alt="Logo"
          src="https://1000logos.net/wp-content/uploads/2017/08/Allstate-Emblem.jpg"
        />
        <a class="menu-item" href="/create">
          New Claim
        </a>
        <a class="menu-item" href="/read">
          Admin
        </a>
      </div>
      <div className="App">
        <div>
          <Route exact path="/create" component={Create}></Route>
        </div>
        <div>
          <Route exact path="/read" component={Read}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
