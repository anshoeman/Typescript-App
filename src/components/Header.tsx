import * as React from "react";
import { Container, Navbar } from "react-bootstrap";
interface IheaderProps {}//Helps To Define The Props 

const Header: React.FunctionComponent<IheaderProps> = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:"bolder"}}>
         {" "}
          React Typescript Project
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
