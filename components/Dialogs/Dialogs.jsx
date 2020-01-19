import React from "react";
import s from "./Dialogs.module.css";
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";

const Dialogs = (props) => {  


  let dialogsElements = props.dialogs.map(d => (<Dialogsitem name={d.name} id={d.id} />));
      
debugger;

  let messagesElements = props.messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          {dialogsElements}
          </div>
      <div className={s.messages}>
          {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
