import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import addBook from './components/AddBook';
import Book from './components/Book2';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './authentifiaction/Login';
import fire from './fire';


function App(){
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);


  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
   

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
            case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
              break;
              case "auth/wrong-password":
                setPasswordError(err.message);
             break; 
        }
      })
  } 

  const handleSingup = () =>{
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch (err.code) {
        case "auth/invalid-email":
          case "auth/email-already-in-use":
              setEmailError(err.message);
            break;
            case "auth/weak-password":
              setPasswordError(err.message);
            break; 
      }
    })
  }
  
  const handleLogout = () => {
    fire.auth().signOut()
  }
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      }else {
          setUser("");        
      }
    });
  }
 
  useEffect(()=> {
    authListener();
  }, []);
  return(
    <Router>
    
      <div className="App">
        {user ? (
          <>
          <Home handleLogout={handleLogout}>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={addBook}/> 
          </Switch>
          </Home>
          </>
    
        ): (
          <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSingup={handleSingup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />  
        )}
      </div>
    </Router>
  )
}

export default App;
