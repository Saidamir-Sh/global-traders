import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Dashboard />
        <Profile />
      </header>
      <small className="footer">API provided by <a href="https://www.alphavantage.co/">Alpha Vantage</a></small>
    </div>
  );
}

export default App;
