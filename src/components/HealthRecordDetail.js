import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/HealthRecordDetail.css'

const HealthRecordDetail = ({ records, onEdit, onDelete }) => {
  const { id } = useParams();
  const record = records.find((rec) => rec.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState(record);
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(formState);
    navigate('/');
  };

  const handleDelete = () => {
    onDelete(record.id);
    navigate('/');
  };

  if (!record) return <div>Record not found</div>;

  return (
    <div className="record-detail">
      <h2>Record Details - {record.date}</h2>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <label>Body Temperature</label>
          <input
            type="number"
            value={formState.temperature}
            onChange={(e) => setFormState({ ...formState, temperature: e.target.value })}
          />
          <label>Blood Pressure</label>
          <input
            type="text"
            value={formState.bloodPressure}
            onChange={(e) => setFormState({ ...formState, bloodPressure: e.target.value })}
          />
          <label>Heart Rate</label>
          <input
            type="number"
            value={formState.heartRate}
            onChange={(e) => setFormState({ ...formState, heartRate: e.target.value })}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <p>Body Temperature: {record.temperature} °C</p>
          <p>Blood Pressure: {record.bloodPressure}</p>
          <p>Heart Rate: {record.heartRate} bpm</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default HealthRecordDetail;
