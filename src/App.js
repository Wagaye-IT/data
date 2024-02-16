import './App.css';
import { data } from './data';
console.table(data);

function App() {
  return (
    <div className="App">
      <>
      {
        data.map(data => (
          <h2>{data.title}</h2>
        ))
      }
      <h1> Hi There!</h1>
      
      </>
    </div>
  );
}

export default App;
