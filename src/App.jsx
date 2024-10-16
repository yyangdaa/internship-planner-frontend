import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicationForm from './components/ApplicationForm.jsx';
import ApplicationList from './components/ApplicationList.jsx';


import './App.css';


function App() {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/applications');
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="App">
      <h1>Internship Planner</h1>
      <ApplicationForm refreshApplications={fetchApplications} />
      <ApplicationList applications={applications} refreshApplications={fetchApplications} />
    </div>
  );
}

export default App;
