import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function TextLinkExample() {
  return (
    <div style={{backgroundColor:"white",opacity:.7,borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
    <Navbar >
      <Container>
        <Navbar.Brand href="#home">!!\//\WEATHER DED/\\/!!</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link to='/' className='btnyr'>LOG OUT</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default TextLinkExample;