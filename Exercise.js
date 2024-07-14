import React from 'react';
import { Link } from 'react-router-dom';

const exercises = [
  {
      id: 1, name: 'Ankle sprain', description: 'How to deal ankle sprains?',
      remedies: {
          immediateCare: [
              'Rest: Avoid putting weight on the injured ankle. Use crutches if necessary.',
              'Ice: Apply an ice pack for 15-20 minutes every 2-3 hours to reduce swelling and numb pain.',
              'Compression: Wrap the ankle with an elastic bandage, ensuring it\'s not too tight.',
              'Elevation: Keep the ankle raised above heart level to reduce swelling.',
          ],
          rehabilitationPhase: [
              'Towel Scrunches: Use your toes to scrunch a towel on the floor.',
              'Resistance Band Exercises: Use a resistance band for ankle strengthening exercises.',
              'Balance Training: Practice standing on one leg to improve balance and proprioception.',
          ],
      },
  },
  { id: 2, name: 'Head concussions', description: 'Details about Exercise 2' },
  { id: 3, name: 'Hamstring strains', description: 'Details about Exercise 3' },
  { id: 4, name: 'Groin pulls', description: 'Details about Exercise 4' },
  { id: 5, name: 'Achilles Tenditis', description: 'Details about Exercise 5' },
  { id: 6, name: 'Planatar Fasciitis', description: 'Details about Exercise 6' },
  { id: 7, name: 'Rugby', description: 'Details about Exercise 7' },
  { id: 8, name: 'Bruised Shoulders', description: 'Details about Exercise 8' },
  { id: 9, name: 'Finger and wrist injuries', description: 'Details about Exercise 9' },
  { id: 10, name: 'Elbow Fractures', description: 'Details about Exercise 10' },
  { id: 11, name: 'Rib fractures', description: 'Details about Exercise 11' },
  { id: 12, name: 'ACL tears', description: 'Details about Exercise 12' },
  { id: 13, name: 'Cycling', description: 'Details about Exercise 13' },
  { id: 14, name: 'Hand numbness', description: 'Details about Exercise 14' },
  { id: 15, name: 'Muscle cramps', description: 'Details about Exercise 15' },
  { id: 16, name: 'Scaphoid fractures', description: 'Details about Exercise 16' },
  { id: 17, name: 'Running', description: 'Details about Exercise 17' },
  { id: 18, name: 'Calf strains', description: 'Details about Exercise 18' },
  { id: 19, name: 'hip strains', description: 'Details about Exercise 19' },
  { id: 20, name: 'Jumping', description: 'Details about Exercise 20' },
];

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '5px',
  padding: '100px',
};

const exerciseItemStyles = {
  backgroundColor: 'lightGreen',
  padding: '20px',
  textAlign: 'center',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

function Exercise() {
  return (
    <div style={gridStyles}>
      {exercises.map((exercise) => (
        <Link
          key={exercise.id}
          to={`/exercises/${exercise.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div style={exerciseItemStyles}>
            {exercise.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Exercise;
