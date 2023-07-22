import { Card, Link, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function BugCard({ bugObj }) {
  console.warn(bugObj);
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={bugObj.image} alt={bugObj.name} style={{ height: '400px' }} />
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
        {/* <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button> */}
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
  // onUpdate: PropTypes.func.isRequired,
};

export default BugCard;
