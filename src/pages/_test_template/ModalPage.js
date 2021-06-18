import React from 'react';
import { Link,Route,Switch } from 'react-router-dom'
import './modals.css';
import Modal_FunctionComponent from './Modal_FunctionComponent';
import Modal_ClassComponent from './Modal_ClassComponent';






class ModalPage extends React.Component {

  render(){
      return (
        <div id="modalpage" className="modalpage">
          <h2>modalテスト</h2>
            <Link to= "/ModalPage/Modal_ClassComponent">クラスコンポーネントの例</Link>
            <Link to= "/ModalPage/Modal_FunctionComponent">関数コンポーネントの例</Link>
          <Switch>
            <Route path='/ModalPage/Modal_ClassComponent' component={Modal_ClassComponent}/>
            <Route path='/ModalPage/Modal_FunctionComponent' component={Modal_FunctionComponent}/>
          </Switch>
        </div>
      );
    }

}

export default ModalPage;
