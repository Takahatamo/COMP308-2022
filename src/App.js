import './App.css';
import LoginForm from './components/login/Login';
import Comment from './components/comment/Comment';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ResultForm from './components/thankyou/ThankYou';
import React, { useState }  from 'react';
import auth from "./auth/auth";

function App() {
  const [comment, setComment] = useState();

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm}></Route>
          <Route exact path="/comment" render={(props) => 
            auth.getLogInStatus() ?
            (<Comment onCommentUpdate={setComment}/>) :
            (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
          <Route exact path="/result" render={(props) => 
            auth.getLogInStatus() ?
            (<ResultForm Comment={comment} />) :
            (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
