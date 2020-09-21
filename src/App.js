import React, { useState, useEffect } from 'react';
import './App.css';
import { getRepos, getUserData } from './github-api';


// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/albums

const userId = "millerjl1980"

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState([true]);
  
  useEffect(() => {
      const fetchUsers = async () => {
        const userData = await getUserData([userId])
        setUsers(userData['user'])
        setLoading(false);
      }

      const fetchOrgs = async () => {
        const userData = await getUserData([userId])
        setOrgs(userData['orgs'])
        setLoading(false);
      }

      const fetchRepos = async () => {
        setRepos( await getRepos([userId]));
        setLoading(false);
      }

      fetchUsers();
      fetchRepos();
      fetchOrgs();

  }, []);

  console.log(users)
  console.log(repos)
  console.log(orgs)

  if (loading) {
    return <div className="container"><h2>Loading...</h2></div>;
  }

  return (
    <div className="container">
      <h1>My App</h1>
    </div>
  );
}

export default App;
