import './App.css';
import Auth from './views/Auth';
import Header from './components/Header';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Auth />
      </div>
    </BrowserRouter>
  );
}

export default App;
