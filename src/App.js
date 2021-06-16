import "./styles.css";
import React, { useState, useEffect } from "react";
import { List, arrayMove } from "react-movable";
import { orderEventsData } from "./data";

function Simple() {
  const { eventsToOrder } = orderEventsData;
  const { eventsCorrectOrder } = orderEventsData;
  const [message1, setMessage1] = useState("");
  const [items, setItems] = useState(eventsToOrder);

  useEffect(() => {
    setMessage1(
      eventsCorrectOrder.toString() === items.toString()
        ? "correct"
        : "incorrect"
    );
  }, [items, eventsCorrectOrder]);

  return (
    <>
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) => {
          setItems(arrayMove(items, oldIndex, newIndex));
        }}
        renderList={({ children, props }) => <ul {...props}>{children}</ul>}
        renderItem={({ value, props }) => {
          return (
            <li className="eventOrderClass" {...props} disabled={true}>
              {value}
            </li>
          );
        }}
      />
      {message1}
    </>
  );
}

export default Simple;
