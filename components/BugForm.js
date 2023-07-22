import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { updateBug, createBug } from '../api/bugData';

const initialState = {
  name: '',
  role: '',
  image: '',
};

function BugForm({ bugObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (bugObj.firebaseKey) setFormInput(bugObj);
  }, [bugObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bugObj.firebaseKey) {
      updateBug(formInput).then(() => router.push(`/bugs/edit/${bugObj.firebaseKey}`));
    } else {
      // Spread syntax unpacks state object (formInput) and allows us to add uid to it
      const payload = { ...formInput, uid: user.uid };
      createBug(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateBug(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{bugObj.firebaseKey ? 'Update' : 'Create'} Bug</h2>

      {/* NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Bug Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter bug's name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ROLE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Bug Role" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter bug's role"
          name="role"
          value={formInput.role}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Bug Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{bugObj.firebaseKey ? 'Update' : 'Create'} Bug</Button>
    </Form>
  );
}

BugForm.propTypes = {
  bugObj: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

BugForm.defaultProps = {
  bugObj: initialState,
};

export default BugForm;
