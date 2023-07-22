// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import BugCard from '../components/BugCard';
import { getBugs } from '../api/bugData';

function Home() {
  // Set a state for bugs
  const [bugs, setBugs] = useState([]);
  // Get user ID using useAuth hook
  const { user } = useAuth();
  // Function that makes the API call to get all the bugs
  const getAllTheBugs = () => {
    getBugs(user.uid).then(setBugs);
  };
  // Make the call to the API to get all the bugs on component render
  useEffect(() => {
    getAllTheBugs();
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          // height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>TEAM</h1>
        {/* <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button> */}
      </div>
      <div id="team-cards">
        {bugs.map((bug) => (
          <BugCard key={bug.firebaseKey} bugObj={bug} onUpdate={getAllTheBugs} />
        ))}
      </div>
    </>
  );
}

export default Home;
