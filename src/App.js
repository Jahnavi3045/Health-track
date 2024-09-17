import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HealthRecordDetail from './components/HealthRecordDetail';
import HealthRecordForm from './components/HealthRecordForm';
import History from './components/History';
import { initialData } from './data';

const App = () => {
  const [records, setRecords] = useState(initialData);
  // const [records, setRecords] = useState([]);  // Initialize as an empty array
  const [activeRecords, setActiveRecords] = useState(records);
  const handleSave = (newRecord) => {
    setRecords((prevRecords) => {
      if (prevRecords.some(record => record.id === newRecord.id)) {
        // Update existing record
        return prevRecords.map(record =>
          record.id === newRecord.id ? newRecord : record
        );
      } else {
        // Add new record
        return [...prevRecords, newRecord];
      }
    });
    setActiveRecords((prevRecords) => {
      if (prevRecords.some(record => record.id === newRecord.id)) {
        return prevRecords.map(record =>
          record.id === newRecord.id ? newRecord : record
        );
      } else {
        return [...prevRecords, newRecord];
      }
    });
  };

  const deleteRecord = (id) => {
    setActiveRecords((prevRecords) => prevRecords.filter(record => record.id !== id));
  };
  // const addRecord = (newRecord) => {
  //   setRecords([...records, newRecord]);
  // };

  const editRecord = (updatedRecord) => {
    const updatedRecords = records.map((record) =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
    setRecords(updatedRecords);
  };


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard records={activeRecords} onDelete={deleteRecord} />}
        />
        <Route
          path="/record/:id"
          element={<HealthRecordDetail records={records} onEdit={editRecord} onDelete={deleteRecord} />}
        />
        <Route
          path="/add"
          element={<HealthRecordForm onSave={handleSave} />}  // Route for the new record form
        />
        <Route 
          path="/edit/:id" 
          element={<HealthRecordForm records={records} onSave={handleSave} 
        />} />
        <Route
          path="/history"
          element={<History records={records} />}  // Route for history view
        />
      </Routes>
    </Router>
  );
};

export default App;

