import React, { useState, useEffect } from 'react';
// https://www.youtube.com/watch?v=bU_eq8qyjic
import { useForm } from 'react-hook-form';
import './App.css';
import { Orgs } from './components/Orgs';
import { Repos } from './components/Repos';
import { User } from './components/User';
import { getRepos, getUserData } from './github-api';

const defaultUser = "millerjl1980"

const App = () => {

  const [searchId, setSearchId] = useState([defaultUser]);
  const {register, handleSubmit} = useForm();
  const [user, setUser] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [repos, setRepos] = useState([]);
  
  const onSubmit = (data) => {
    setSearchId(data['searchId'])
    console.log(searchId)
  }

  useEffect(() => {
      const fetchUser = async () => {
        const userData = await getUserData([searchId])
        setUser(userData['user'])
      }

      const fetchOrgs = async () => {
        const userData = await getUserData([searchId])
        setOrgs(userData['orgs'])
      }

      const fetchRepos = async () => {
        setRepos( await getRepos([searchId]));
      }

      fetchUser();
      fetchRepos();
      fetchOrgs();

  }, [searchId]);

  return (
    <div className="container">
      <h1>GitHub User</h1>

      <form onSubmit={handleSubmit(onSubmit)} >
      <div className="form-group">
        <label for="exampleInputEmail1">GitHub User ID</label>
        <input type="text" name="searchId" className="form-control" id="exampleInputEmail1" aria-describedby="textHelp" placeholder="Enter user ID" ref={register}/>
        <small id="textHelp" className="form-text text-muted">Enter a GitHub user id to search for.</small>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>

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
