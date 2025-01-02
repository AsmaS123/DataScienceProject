import React, { FC } from 'react';
import styles from './Messasge.module.css';

// interface MessasgeProps {}

const Messasge = ({ message }:any) => {
  debugger
  debugger
  return(
    <div className={styles.Messasge} data-testid="Messasge">
      <br></br>
      { message.sender == 'AI' &&  <img src="chat-gpt.png" alt="description" className={styles.marginbootom}/> } 
       &nbsp;&nbsp;
      { message.sender == 'user' ? <div className={styles.floatmarginright}>{message.text}</div> : message.text}
      
  </div>
)
};

export default Messasge;
