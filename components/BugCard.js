import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteBug } from '../api/bugData';

function BugCard({ bugObj, onUpdate }) {
  console.warn(bugObj);

  const deleteThisBug = () => {
    if (window.confirm(`Delete ${bugObj.name}?`)) {
      deleteBug(bugObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '22rem', margin: '10px' }}>
      <Card.Img variant="top" src={bugObj.image} alt={bugObj.name} style={{ height: 'auto' }} />
      <Card.Body>
        <Card.Title>{bugObj.name}</Card.Title>
        <p className="card-text bold">Role: {bugObj.role}</p>
        {/* DYNAMIC LINK TO VIEW THE AUTHOR DETAILS
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link> */}
        {/* DYNAMIC LINK TO EDIT THE BUG DETAILS  */}
        <Link href={`/bugs/edit/${bugObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisBug} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

BugCard.propTypes = {
  bugObj: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BugCard;
