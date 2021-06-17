import React from 'react';
import './modals.css';

class EndMogdal extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  };

  clickBtn(){
    return(
      this.props.user_function()
    )
  }

  render(){
    return(
      <div className={this.props.className}>
      <div>
      <p>{this.props.texts}</p>
      <div onClick={this.props.onClick}>
        </div>
        </div>
      </div>
    )


}
};

export {EndMogdal};
