import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'

function Search() {
  return (
    <div className='search'>
    <Stack direction="horizontal" gap={3} >
      <Form.Control className="me-auto" placeholder="Location Here" />
      <Button variant="secondary">Search</Button>
      <div className="vr" />
      <Button variant="outline-danger">Reset</Button>
    </Stack>
    </div>
  );
}

export default Search;