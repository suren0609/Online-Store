import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex justify-content-start">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3 me-2"
          style={{ width: "unset", cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
