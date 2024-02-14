import React, { useState } from 'react';
import '../assets/css/Admin.css';

const AdminDashboard = () => {
  const [yogaAdmissions, setYogaAdmissions] = useState([
    { id: 1, student: 'Alice Johnson', status: 'Pending' },
    { id: 2, student: 'Bob Smith', status: 'Pending' },
    { id: 3, student: 'Charlie Brown', status: 'Approved' },
    // Add more sample data as needed
  ]);

  const handleApprove = (id) => {
    const updatedAdmissions = yogaAdmissions.map((admission) =>
      admission.id === id ? { ...admission, status: 'Approved' } : admission
    );
    setYogaAdmissions(updatedAdmissions);
  };

  const handleReject = (id) => {
    const updatedAdmissions = yogaAdmissions.map((admission) =>
      admission.id === id ? { ...admission, status: 'Rejected' } : admission
    );
    setYogaAdmissions(updatedAdmissions);
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Yoga Admission Management Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {yogaAdmissions.map((admission) => (
            <tr key={admission.id} style={{ marginBottom: '10px' }}>
              <td>{admission.id}</td>
              <td>{admission.student}</td>
              <td>{admission.status}</td>
              <td>
                {admission.status === 'Pending' && (
                  <>
                    <button onClick={() => handleApprove(admission.id)}>
                      Approve
                    </button>
                    <button onClick={() => handleReject(admission.id)}>
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
