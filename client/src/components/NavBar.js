import React, { useContext } from "react";
import { Context } from "..";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="Links" to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} className="mr-2">
              Admin panel
            </Button>
            <Button variant={"outline-light"}>Sign In</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
