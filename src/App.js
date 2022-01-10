import './App.css';
import Auth from './views/Auth';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUser, logout } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <img className="meme" src={process.env.PUBLIC_URL + '/meme.png'} />
                <button className="logout-button" onClick={logoutUser}>
                  Log Out
                </button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
