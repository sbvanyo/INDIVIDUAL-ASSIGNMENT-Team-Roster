import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

// const initialState = '';

export default function SearchBar() {
  // const [searchInput, setSearchInput] = useState(initialState);

  const handleKeyUp = (e) => {
    console.warn('hello keyup', e.target);
  };

  return (
    <Form>
      <FloatingLabel controlId="floatingInput5" label="Search" className="mb-3">
        <Form.Control
          type="text"
          placeholder="search..."
          name="search"
          onKeyUp={handleKeyUp}
        />
      </FloatingLabel>
    </Form>
  );
}
