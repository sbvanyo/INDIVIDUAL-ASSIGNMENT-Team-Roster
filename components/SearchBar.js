import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SearchBar({ onKeyUp }) {
  const handleKeyUp = (e) => {
    // console.warn('hello keyup', e);
    onKeyUp(e.target.value.toLowerCase());
  };

  return (
    <Form id="search">
      <FloatingLabel controlId="search" label="Search" className="mb-3">
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

SearchBar.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};
