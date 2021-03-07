import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css'
import SeatingImage from "./SeatingImage"
import TableLayout from "./TableLayout";
import Controls from "./Controls"

function App() {
  return (
      <div className="App">
          <TableLayout/>
          <SeatingImage/>
          <Controls/>
      </div>
  );
}

export default App;