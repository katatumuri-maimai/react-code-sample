import React,{ useEffect,useCallback,useState }  from 'react';
import './modals.css';


// 子コンポーネント（モーダル）
function Modal(props){

  return(
      <div id="modal" className="modal">
      <div>
        <p>モーダル</p>
        <button onClick={props.onClick}>閉じるボタン</button>
        </div>
      </div>
  )
}


// 親コンポーネント
export default function Modal_FunctionComponent(){

  const[isModalOpen,setIsModalOpen]=useState(false)

  const clickOutside= useCallback((event) =>{
    if(!event.target.closest('.modal')) {
      closeModal()
    }
  },[])

  useEffect(()=>{
    if(isModalOpen){
      document.addEventListener('click',clickOutside)
    }
    return ()=>{
      document.removeEventListener('click',clickOutside)
    }
  },[clickOutside,isModalOpen])


  function openModal(){
    setIsModalOpen(true)
  }
  function closeModal(){
    setIsModalOpen(false)
  }


  return (
    <div className="modalpage">
      <h1>関数コンポーネント</h1>
      <button onClick={()=>{openModal()}}>モーダルを開く</button>

      {isModalOpen? <Modal onClick={()=>{closeModal()}}/> :""}

    </div>
  );
}
