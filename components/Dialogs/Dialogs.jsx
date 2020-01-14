import React from "react";
import s from "./Dialogs.module.css";
import Dialogsitem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How" },
    { id: 3, message: "YO" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" }
  ];

  let dialogsElements = dialogs.map(d => (<Dialogsitem name={d.name} id={d.id} />));
  let messagesElements = messages.map(m => <Message message={m.message} />);

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
