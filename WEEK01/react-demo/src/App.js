import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="card">
        <h2>Learn React</h2>
        <div className="actions">
          <btn className="btn">Delete</btn>
        </div>
      </div>
    </div>
  );
}

export default App;
