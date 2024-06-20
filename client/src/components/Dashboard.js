import React, { Fragment, useEffect, useState } from 'react';



const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState('');

  async function getName() {
    try {
      const response = await fetch('http://localhost:5000/dashboard', {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  };

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <div className='dashboard-container'>
        <h1>Dashboard {name}</h1>
        <button onClick={logout}>Logout</button>
      </div>
    </Fragment>
  );
};

export default Dashboard;
