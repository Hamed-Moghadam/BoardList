import { useState } from "react";
import styles from "./layout.module.css";
import List from "./list/uiList";
import { DragDropContext } from "react-beautiful-dnd";

function Layout() {
  const [listData, setListData] = useState([
    [
      { id: "Cardone", title: "Card 1" },
      { id: "Cardtwo", title: "Card 2" },
    ],
    [
      { id: "Card A", title: "Card A" },
      { id: "Card B", title: "Card B" },
      { id: "Card C", title: "Card C" },
      { id: "Card D", title: "Card D" },
    ],
  ]);
  const [newCardId, setNewCardId] = useState(1);

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceList = [...listData[source.droppableId.split("-")[1]]];
    const destinationList = [
      ...listData[destination.droppableId.split("-")[1]],
    ];

    const [movedCard] = sourceList.splice(source.index, 1);

    if (destination.droppableId !== source.droppableId) {
      destinationList.splice(destination.index, 0, movedCard);
    }

    const updatedListData = [...listData];
    updatedListData[source.droppableId.split("-")[1]] = sourceList;
    updatedListData[destination.droppableId.split("-")[1]] = destinationList;

    setListData(updatedListData);
  };

  const handleAddList = () => {
    const newList = [{ id: `card-${newCardId}`, title: `Card ${newCardId}` }];
    setListData([...listData, newList]);
    setNewCardId(newCardId + 1);
  };
  const handleAddCard = (listIndex) => {
    const updatedListData = [...listData];
    const newCard = { id: `card-${newCardId}`, title: `Card ${newCardId}` };
    updatedListData[listIndex] = [...updatedListData[listIndex], newCard];
    setListData(updatedListData);
    setNewCardId(newCardId + 1);
  };

  const handleRemoveCard = (listIndex, cardId) => {
    const updatedListData = [...listData];
    updatedListData[listIndex] = updatedListData[listIndex].filter(
      (card) => card.id !== cardId
    );
    setListData(updatedListData);
  };

  const handleRemoveList = (index) => {
    const updatedListData = listData.filter((_, i) => i !== index);
    setListData(updatedListData);
  };
  const handleRenameCard = (listIndex, cardId, newName) => {
    const updatedListData = [...listData];
    updatedListData[listIndex].map((card) => {
      if (card.id == cardId ) {
        return (card.title = newName);
      }
    });
    setListData(updatedListData);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={styles.addlistbtn}>
        <button onClick={handleAddList}>Add List</button>
      </div>
      <div className={styles.listContainer}>
        {listData.map((cards, index) => (
          <div key={index} className={styles.listwraper}>
            <List
              cards={cards}
              listId={`list-${index}`}
              listIndex={index}
              onRemoveCard={handleRemoveCard}
              onChangeNameCard={handleRenameCard}
            />
            <div className={styles.btncontainer}>
              <button onClick={() => handleAddCard(index)}>Add Card</button>
              <button onClick={() => handleRemoveList(index)}>
                Remove List
              </button>
            </div>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}

export default Layout;
