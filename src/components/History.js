import React from 'react';
import './styles/History.css'

const History = ({ records =[]}) => {
  return (
    <div className="history">
      <h2>Health Records History</h2>
      {records.length === 0 ? (
        <p>No records available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Blood Pressure</th>
              <th>Heart Rate</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.temperature}</td>
                <td>{record.bloodPressure}</td>
                <td>{record.heartRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
