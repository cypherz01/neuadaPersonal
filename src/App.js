import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Create from "./components/Create/Create";
import Delete from "./components/Delete/Delete";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";

function App() {
  return (
  <div className="App">
    <div>
        <Create></Create>
    </div>
    <div>
        <Read></Read>
    </div>
    <div>
        <Update></Update>
    </div>
    <div>
        <Delete></Delete>
    </div>

  </div>
  )
  
}
  
export default App;
