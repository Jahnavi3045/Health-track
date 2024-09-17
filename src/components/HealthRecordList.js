import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HealthRecordList.css'

const HealthRecordList = ({ records, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="record-list">
      <h2>Health Records</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Blood Pressure</th>
            <th>Heart Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.date}</td>
              <td>{record.temperature}</td>
              <td>{record.bloodPressure}</td>
              <td>{record.heartRate}</td>
              <td>
                <button onClick={() => navigate(`/record/${record.id}`)}>View</button>
                <button onClick={() => onDelete(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthRecordList;


