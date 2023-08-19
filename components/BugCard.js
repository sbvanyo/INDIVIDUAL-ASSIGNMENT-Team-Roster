import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteBug } from '../api/bugData';

function BugCard({ bugObj, onUpdate }) {
  const deleteThisBug = () => {
    if (window.confirm(`Delete ${bugObj.name}?`)) {
      deleteBug(bugObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="card" style={{ width: '22rem', margin: '10px' }}>
      <Card.Img variant="top" src={bugObj.image} alt={bugObj.name} style={{ height: 'auto' }} />
      <Card.Body>
        <Card.Title>{bugObj.name}</Card.Title>
        <p className="card-text bold"><strong>Role:</strong> {bugObj.role}</p>
        {/* DYNAMIC LINK TO EDIT THE BUG DETAILS  */}
        <Link href={`/bug/edit/${bugObj.firebaseKey}`} passHref>
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
