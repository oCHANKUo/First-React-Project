import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  // items = [];

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No Items Found</p> : null}
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
