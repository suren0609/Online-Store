import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  console.log(device.types);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          key={type.id}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          style={{ cursor: "pointer" }}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
