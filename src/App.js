import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Create from "./components/Create/Create";
import Delete from "./components/Delete/Delete";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
  <div className="App">
    <div>
        <Route exact path ="/create" component={Create}></Route>
    </div>
    <div>
    <Route exact path ="/read" component={Read}></Route>
    </div>
    <div>
    <Route exact path ="/update" component={Update}></Route>
    </div>
    <div>
    <Route  exact path="/delete" component={Delete}></Route>
    </div>
  </div>
  </BrowserRouter>
  )
}
  
export default App;
