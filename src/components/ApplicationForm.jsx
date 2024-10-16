import React, { useState } from 'react';
import axios from 'axios';

function ApplicationForm({ refreshApplications }) {
  const [form, setForm] = useState({
    companyName: '',
    dateApplied: '',
    status: 'Applied',
    currentRound: '',
    outcome: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/applications', form);
      setForm({
        companyName: '',
        dateApplied: '',
        status: 'Applied',
        currentRound: '',
        outcome: 'Pending',
      });
      refreshApplications();
    } catch (error) {
      console.error("Error adding application:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={form.companyName}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateApplied"
        value={form.dateApplied}
        onChange={handleChange}
        required
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="In Progress">In Progress</option>
        <option value="Rejected">Rejected</option>
        <option value="Accepted">Accepted</option>
      </select>
      <input
        type="text"
        name="currentRound"
        placeholder="Current Round"
        value={form.currentRound}
        onChange={handleChange}
      />
      <select name="outcome" value={form.outcome} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Application</button>
    </form>
  );
}

export default ApplicationForm;
