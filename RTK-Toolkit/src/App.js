
import './App.css';
import PageA from './Pages/PageA';
import PageC from './Pages/PageC';
import PageE from './Pages/PageE';
import PageDispatch from './Pages/PageDispatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageA />
        <PageC />
        <PageE />
        <PageDispatch />
      </header>
    </div>
  );
}

export default App;
