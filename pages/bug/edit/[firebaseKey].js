import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleBug } from '../../../api/bugData';
import BugForm from '../../../components/BugForm';

export default function EditBug() {
  const [editMember, setEditMember] = useState({});
  const router = useRouter();
  // Grab the firebasekey
  const { firebaseKey } = router.query;

  // make a call to the API to get the bug data
  useEffect(() => {
    getSingleBug(firebaseKey).then(setEditMember);
  }, [firebaseKey]);

  // pass object to form
  return (<BugForm bugObj={editMember} />);
}
