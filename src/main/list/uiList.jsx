import Card from "../card/uiCard";
import styles from "./list.module.css";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

function List({ cards, listId, listIndex, onRemoveCard, onChangeNameCard }) {
  const [nameList, setName] = useState("my List");
  const [ListNameFlag, setNameFlag] = useState(true);
  const [newName, setNewName] = useState("");

  const handleBTNnameList = () => {
    if (ListNameFlag) {
      setNameFlag(false);
    } else {
      setName(newName);
      setNameFlag(true);
    }
  };

  return (
    <>
      <Droppable droppableId={listId}>
        {(provided) => (
          <div
            className={styles.main}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {ListNameFlag ? (
              <div className={styles.listname}>
                <h1>{nameList}</h1>
                <button onClick={handleBTNnameList}>Rename</button>
              </div>
            ) : (
              <div className={styles.listname}>
                <input
                  style={{ fontSize: "20px", width: "100px" }}
                  type="text"
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }}
                />
                <button onClick={handleBTNnameList}>Submit</button>
              </div>
            )}
            <div className={styles.cardcontainer}>
              {cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        content={card}
                        onRemove={() => onRemoveCard(listIndex, card.id)}
                        onRename={(newtitle) =>
                          onChangeNameCard(listIndex, card.id, newtitle)
                        }
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}

export default List;
