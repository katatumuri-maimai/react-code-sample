import React from 'react';
import './modals.css';

// 子コンポーネント（モーダル）
class Modal extends React.Component {

  render(){
    return(
        <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
          <div>
            <p>モーダル</p>
            <button onClick={this.props.onClick}>閉じるボタン</button>
          </div>
        </div>
    )
}}





// 親コンポーネント
class Modal_ClassComponent extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
      isModalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  };

  componentWillUnmount(){
    document.removeEventListener('click',this.closeModal)
  }

  openModal(event){
    this.setState({isModalOpen:true})
    document.addEventListener('click',this.closeModal)
    event.stopPropagation()
  }

  closeModal(){
    this.setState({isModalOpen:false})
    document.removeEventListener('click',this.closeModal)
  }

  render(){
      return (
        <div className="modalpage">
          <h2>クラスコンポーネント</h2>
            <button onClick={(event)=>{this.openModal(event)}}>モーダルを開く</button>

            {this.state.isModalOpen? <Modal onClick={()=>{this.closeModal()}}/> :""}

          </div>
      );
    }
}

export default Modal_ClassComponent;
