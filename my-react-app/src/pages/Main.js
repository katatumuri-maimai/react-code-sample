import React from 'react';
import { Route,Switch,Link } from 'react-router-dom'
import ModalPage from './modaltest/ModalPage';


class Main extends React.Component {

  render(){
      return (
        <main>
          <Switch>
            <Route exact path='/' component={ModalPage}/>
            <Route path='/ModalPage' component={ModalPage}/>
          </Switch>
        </main>
      );
    }

}

export default Main;
