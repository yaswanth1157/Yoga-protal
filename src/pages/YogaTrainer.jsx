import React from 'react';
import '../assets/css/Yoga.css'; 
import Icons from  '../assets/Image/kumar.jpg'
import Icons2 from '../assets/Image/raj.jpg'
import Icons3 from '../assets/Image/yesh.jpg'
const YogaTrainer = () => {
  const trainers = [
    { id: 1, name: 'Williams', photoUrl: Icons },
    { id: 2, name: 'Marry', photoUrl: Icons2 },
    { id: 3, name: 'Nancy', photoUrl: Icons3 },
    
  ];

  return (
    <div className="yoga-trainer-list-container">
      <h2 style={{color : "black"}}>Yoga Portal Trainers</h2>
      <ul className="trainer-list">
        {trainers.map((trainer) => (
          <li key={trainer.id} className="trainer-item">
            <img src={trainer.photoUrl} alt={`Photo of ${trainer.name}`} className="trainer-photo" />
            <p className="trainer-name">{trainer.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YogaTrainer;
