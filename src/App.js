import React, { useState, useEffect } from 'react';
import './App.css';
import { Orgs } from './components/Orgs';
import { Repos } from './components/Repos';
import { User } from './components/User';
import { getRepos, getUserData } from './github-api';


// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/albums

const userId = "millerjl1980"

const App = () => {

  const [user, setUser] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState([true]);
  
  useEffect(() => {
      const fetchUser = async () => {
        const userData = await getUserData([userId])
        setUser(userData['user'])
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

      fetchUser();
      fetchRepos();
      fetchOrgs();

  }, []);

  // console.log(user)
  //console.log(repos)
  // console.log(orgs)

  if (loading) {
    return <div className="container"><h2>Loading...</h2></div>;
  }

  return (
    <div className="container">
      <h1>My App</h1>
      <User 
        image= {user['avatar_url']}
        name= {user['name']}
        bio= {user['bio']}
        followers= {user['followers']}
      />
      <h2>Organizations</h2>
      <Orgs orgs={ orgs } />
      <h2>Repositories</h2>
      <Repos repos={ repos } />

    </div>
  );
}

export default App;
