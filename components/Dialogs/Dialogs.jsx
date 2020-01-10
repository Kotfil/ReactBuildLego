import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
            <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Victor</div>
        <div className={s.dialog}>Valera</div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How are you?</div>
        <div className={s.dialog}>Hello</div>
      </div>
    </div>
  );
};

export default Dialogs;
