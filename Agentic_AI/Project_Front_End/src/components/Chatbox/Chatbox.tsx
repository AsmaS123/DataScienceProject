import React, { useState, FC,useLayoutEffect } from 'react';
import styles from './Chatbox.module.css';
import axios from 'axios'
// import './Chatbox.css'; // Add custom styles if needed
import Message from '../Messasge/Messasge';
// import { text } from 'stream/consumers';
import {endpoint} from '../../config.urls';

// interface ChatboxProps {}

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [flag, setFlag] = useState(false)
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const temp :any= [...messages, { id: messages.length + 1, text: '      ' +newMessage, sender: 'user' },]
      setMessages(temp);
      setFlag(true)
    }
  };

  const handleInputChange = (event:any) => {
    setNewMessage(event.target.value);
  };

  function getChatBoxResponse(){
    debugger
    const url = endpoint+newMessage;
    setNewMessage('');
    axios.get(url).then((res)=>{
      debugger
      const output = res.data.result.response;
      setMessages((prevMessages) :any=> [...prevMessages,{ id: prevMessages.length + 1, text: output, sender: 'AI' },]);
      console.log(res,'res')
      setFlag(false)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useLayoutEffect(()=>{
    debugger  
    if(flag){
      getChatBoxResponse()
    }
 
  },[flag])

  return(
    <>
        <h2 className={styles.textcenter}>Agentic AI Chatbox</h2>
   <div className={styles.chatbox}>

      <div className={styles.messagelist}>
        {messages.map((message:any) => {
         return (<> <Message key={ message.id} message={message} /></>)
        }
        )}
      </div>
      <div className={styles.inputcontainer}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button className={styles.button}onClick={handleSendMessage}>Send</button>
      </div>
    </div>
    </>
)
};

export default Chatbox;


