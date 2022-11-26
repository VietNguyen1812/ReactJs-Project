
import './App.css';

function App() {

  const colorList = ['red', 'green', 'blue'];
  const student = { name: "John" };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Viet Nguyen
        </p>
        <p> {student.name}</p>
        <ul>
          {colorList.map(color => (
            <li style ={{color}}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
