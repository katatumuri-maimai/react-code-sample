import React from 'react';
import { Route} from 'react-router-dom'
import Home from '../pages/home/Home';
import ModalPage from '../pages/modaltest/ModalPage';


class Main extends React.Component {

  render(){
      return (
        <main id="main" className="main">
            <Route exact path='/' component={Home}/>
            <Route path='/ModalPage' component={ModalPage}/>
        </main>
      );
    }

}

export default Main;
