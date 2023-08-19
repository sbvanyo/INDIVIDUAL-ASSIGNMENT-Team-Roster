import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import BugCard from '../components/BugCard';
import { getBugs } from '../api/bugData';
import SearchBar from '../components/SearchBar';

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
  });

  const filterResult = (query) => {
    if (!query) {
      getAllTheBugs();
    } else {
      const filter = bugs.filter((bug) => bug.name.toLowerCase().includes(query) || bug.role.toLowerCase().includes(query));
      setBugs(filter);
    }
  };

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <SearchBar onKeyUp={(query) => filterResult(query)} />
        <h1 style={{ fontSize: '90px' }}>TEAM</h1>
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
