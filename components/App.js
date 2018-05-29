import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import AllPicsQuery from './AllPicsQuery';
import AuthMutn from './AuthMutn';
import AddPicMutn from './AddPicMutn';
import MyPicsQry from './MyPicsQry';

const App = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={AllPicsQuery} />
      <Route exact path="/signin" component={AuthMutn} />
      <Route exact path="/createaccount" component={AuthMutn} />
      <Route exact path="/addpicture" component={AddPicMutn} />
      <Route exact path="/mypictures" component={MyPicsQry} />
    </Switch>
  </React.Fragment>
);

export default App;
