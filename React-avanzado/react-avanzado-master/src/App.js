import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';

import { authLogin, authLogout } from './store/actions';

function App() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    console.log(ref.current);
  }, []);


  return (
    <div className="App">
   
        <Switch>
          <Route path="/tweet/:tweetId">
            {routeProps => <TweetDetailPage ref={ref} {...routeProps} />}
          </Route>
          <PrivateRoute path="/tweet">
            <NewTweetPage />
          </PrivateRoute>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <TweetsPage />
          </Route>
          <Route path="/404">
            <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}
            >
              404 | Not found page
            </div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
     
    </div>
  );
}



export default App;
