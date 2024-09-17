import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/HealthRecordItem.css'

const HealthRecordItem = ({ record, onDelete }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{record.date}</td>
      <td>{record.temperature} °C</td>
      <td>{record.bloodPressure}</td>
      <td>{record.heartRate} bpm</td>
      <td>
        <button onClick={() => navigate(`/record/${record.id}`)}>View</button>
        <button onClick={() => onDelete(record.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default HealthRecordItem;
