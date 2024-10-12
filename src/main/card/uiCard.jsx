import React from "react";
import styles from "./card.module.css";
import { useState } from "react";
function Card({ content, onRemove, onRename }) {
  const [nameState, setNameState] = useState(true);
  const [newName, setNewName] = useState("");
  return nameState ? (
    <div className={styles.mainconrainer}>
      <h1>{content.title}</h1>
      <button
        style={{ color: "aliceblue" }}
        onClick={() => {
          if (nameState) {
            setNameState(false);
          } else {
            setNameState(true);
          }
        }}
      >
        Add Title
      </button>
      <button style={{ color: "brown" }} onClick={onRemove}>
        X
      </button>
    </div>
  ) : (
    <div className={styles.mainconrainer}>
      <input
        style={{ fontSize: "20px", width: "100px" }}
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button
        style={{ color: "chartreuse" }}
        onClick={() => {
          if (nameState) {
            setNameState(false);
          } else {
            onRename(newName);

            setNameState(true);
          }
        }}
      >
        submit
      </button>
      <button style={{ color: "brown" }} onClick={onRemove}>
        X
      </button>
    </div>
  );
}

export default Card;
