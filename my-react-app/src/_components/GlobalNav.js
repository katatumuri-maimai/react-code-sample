import React from 'react';
import { Link } from 'react-router-dom'




class GlobalNav extends React.Component {

  render(){
      return (
        <div id="global_nav">
            <Link to= "/">Home</Link>
            <Link to= "/ModalPage">モーダルテストページ</Link>
        </div>
      );
    }

}

export default GlobalNav;
