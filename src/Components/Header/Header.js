import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/Header.css";
import logo from "../../Images/MagicPlannerLogo.png";
import useScrollDirection from "../../Components/TemplateComp/useScrollDirection";

function Header() {
  const isHidden = useScrollDirection();

  return (
    <Navbar expand="lg" variant="light" className={`navbar-header ${isHidden ? 'hidden' : ''}`}>
      <Container>
        <Navbar.Brand><Link to="/"><img src={logo} height={75} alt="Adri Magic Planner Logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/">INICIO</Nav.Link>
            <NavDropdown title="PARQUES DISNEY" className="nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/magic-kingdom">Magic Kingdom</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/epcot">EPCOT</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hollywood-studios">Hollywood Studios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/animal-kingdom">Animal Kingdom</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PARQUES UNIVERSAL" className="nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/universal-studios">Universal Studios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/islands-of-adventure">Islands of Adventure</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/volcano-bay">Volcano Bay</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="HOTELES" className="nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/disney-hotels">Hoteles Disney</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/universal-hotels">Hoteles Universal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">CONTACTO</Nav.Link>
          </Nav>
          <Link to="/quote"><Button className="custom-btn" variant="dark" href="#quote">Cotizar Ahora</Button></Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;