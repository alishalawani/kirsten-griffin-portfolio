import './App.css';
import { MainView } from './Components/MainView/MainView';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainView></MainView>
    </div>
  );
}

export default App;
