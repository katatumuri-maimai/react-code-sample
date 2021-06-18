import React from 'react';
import './modals.css';

// 子コンポーネント（モーダル）
function Modal(props){

  return(
      <div id="modal" className="modal" onClick={(e)=>{e.stopPropagation()}}>
      <div>
        <p>モーダル</p>
        <button onClick={props.onClick}>閉じるボタン</button>
        </div>
      </div>
  )
}


// 親コンポーネント
class Modal_ClassComponent extends React.Component {
  constructor(props) {
   super(props);
    // this.mounted = false;
    this.state = {
      isModalOpen: false
    };
    this.clickOutside = this.clickOutside.bind(this);
  };


  clickOutside(event){
      console.log("event");
      this.closeModal()
      event.stopPropagation()
  }

  componentWillUnmount(){
    document.removeEventListener('click',this.clickOutside)
  }

  openModal(event){
    this.setState({isModalOpen:true})
    event.stopPropagation()
    document.addEventListener('click',this.clickOutside)
  }

  closeModal(){
    this.setState({isModalOpen:false})
    document.removeEventListener('click',this.clickOutside)
  }

  render(){
    console.log(this.state.isModalOpen);
      return (
        <div className="modalpage">
          <h2>クラスコンポーネント</h2>
            <button onClick={(e)=>{this.openModal(e)}}>モーダルを開く</button>

            {this.state.isModalOpen? <Modal onClick={()=>{this.closeModal()}}/> :""}

          </div>
      );
    }
}

export default Modal_ClassComponent;
