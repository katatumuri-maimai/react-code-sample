import React from 'react';
import { Link } from 'react-router-dom'




class Home extends React.Component {

  render(){
      return (

        <div id="modalpage">
          <h1>Home</h1>
            <Link to= "/ModalPage">モーダルテストページ</Link>
        </div>
      );
    }

}

export default Home;
