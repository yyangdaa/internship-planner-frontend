import React from 'react';
import axios from 'axios';

function ApplicationList({ applications, refreshApplications }) {
  const deleteApplication = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/applications/${id}`);
      refreshApplications();
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {applications.map((app) => (
          <li key={app._id}>
            <strong>{app.companyName}</strong> - {app.status} <br />
            Applied on: {new Date(app.dateApplied).toLocaleDateString()}
            <br />
            Current Round: {app.currentRound} <br />
            Outcome: {app.outcome} <br />
            <button onClick={() => deleteApplication(app._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationList;
