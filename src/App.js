import logo from './logo.svg';
import './App.css';
import { TodoList } from './components/TodoList';
import { PersonList } from './components/PersonList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <br />
      <PersonList />
    </div>
  );
}

export default App;
