import React from 'react';
import BugForm from '../../components/BugForm';

export default function AddBug() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        // height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>ADD A MEMBER</h1>
      <BugForm />
    </div>
  );
}
