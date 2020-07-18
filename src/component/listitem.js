import React from "react";

function ListItem(props) {
  const items = props.items;
  const strikethrough = props.strikethrough;
  // console.log(strikethrough);
  const LItems = items.map(item => {
    return (
      <div key={item.key}>
        <p>
          <span>{item.text}</span>

          <span
            onClick={() => props.deleteitem(item.key)}
            className="fa fa-trash"
          />
          <span
            onClick={() => props.completeitem(item.key)}
            className="fa fa-check"
          />
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>{LItems}</div>
      {/* <div>{SItems}</div> */}
    </div>
  );
}

export default ListItem;
