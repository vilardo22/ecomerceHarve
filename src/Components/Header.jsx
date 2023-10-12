import { Container, Nav,  Navbar } from "react-bootstrap";
import { GerenciadorLogin } from "./GerenciadorLogin";




function Header(props) {
  return (
    <Container>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
          
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <GerenciadorLogin />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "100px" }}>{props.children}</div>
    </Container>
  );
}

export default Header;
