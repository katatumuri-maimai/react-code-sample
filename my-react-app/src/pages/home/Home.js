import React from 'react';
import { Link } from 'react-router-dom'




class Home extends React.Component {

  render(){
      return (

        <div id="home" className="home">
          <h2>Home</h2>
            <Link to= "/ModalPage">モーダルテストページ</Link>
        </div>
      );
    }

}

export default Home;
