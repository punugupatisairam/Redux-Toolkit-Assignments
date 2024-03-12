import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';

function App() {
  return (
    <div className="App">
     <Counter></Counter> <br/> <br/>
     <Todolist></Todolist>
    </div>
  );
}

export default App;
