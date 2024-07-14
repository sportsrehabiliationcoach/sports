import React from 'react';
import { useParams } from 'react-router-dom';



const exercises = [
  {
    id: 1,
    name: 'Ankle sprain',
    description: 'How to deal ankle sprains?',
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
      prevention: [
        'Proper Footwear: Wear supportive basketball shoes that fit well and are in good condition.',
        'Ankle Taping or Bracing: Consider taping your ankle or wearing a brace during games and practices.',
        'Warm-Up and Stretching: Warm up properly before playing and stretch your calves, Achilles tendon, and foot muscles.',
        'Strength and Conditioning: Regularly perform exercises like calf raises and toe raises to strengthen ankle muscles.',

      ],
    },
    gifs: ['https://media1.tenor.com/images/0e69ff3391bb51305d2817fe6c817127/tenor.gif?itemid=8978096'],
    giffys:[
      {
        url:'https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Galleries/6+Stretches/Slide+2.gifs',
        description:'fghjk',

      },
      {
        url:'https://www.spinefitchiro.com/wp-content/uploads/2019/02/Verywell-02-2696480-LateralJump-598ca7289abed5001049c5b5-2.gif',
        description:'fghjk',
      },
           
    ]


    



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


const MediaSection = ({ gifs, giffys }) => (
  <div style={{ marginTop: '20px' }}>
    {gifs && gifs.length > 0 && (
      <div>
        <h3>GIFs</h3>
        {gifs.map((gif,index) => (
          <img
            key={index}
            src={gif}
            alt={`Gif ${index + 1}`}
            style={{ width: '100%', maxWidth: '300px', marginBottom: '10px' }}
          />
        ))}
      </div>
    )}
    <h3>Exercises</h3>
    {giffys && giffys.length > 0 && (
      <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {giffys.map((giffy, index) => (
          <div key={index} style={{ maxWidth: '400px' }}>
            <img
              src={giffy.url}
              alt={`GIF ${index + 1}`}
              style={{ width: '100%', marginBottom: '10px' }}
            />
            <p style={{ textAlign: 'center', fontSize: '14px' }}>{giffy.description}</p>
          </div>
        ))}
      </div>
    </div>
    )}
  </div>
);


const RemediesSection = ({ title, remedies }) => (
  <div style={{ marginBottom: '20px' }}>
    <h3>{title}</h3>
    <ul style={{ fontFamily: 'Times New Roman, sans-serif', fontWeight: 'medium', fontSize: '20px', color: 'black' }}>
      {remedies.map((remedy, index) => (
        <li key={index}>{remedy}</li>
      ))}
    </ul>
  </div>
);


const divStyle = {

  padding: '40px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  animation: 'fadeIn 1s ease-in-out',
}

function Detail() {




  const { exerciseId } = useParams();
  const exercise = exercises.find(ex => ex.id === parseInt(exerciseId));

  return (
    <div style={divStyle}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', paddingTop: '50px' }}>{exercise.name}</h1>
      <h2 style={{ color: '#2980b9', marginBottom: '10px' }}>{exercise.description}</h2>

      <RemediesSection title="Immediate Care (First 24-48 Hours)" remedies={exercise.remedies.immediateCare} />
      <RemediesSection title="Rehabilitation Phase" remedies={exercise.remedies.rehabilitationPhase} />
      <RemediesSection title="Prevention" remedies={exercise.remedies.prevention} />
      <MediaSection gifs={exercise.gifs} giffys={exercise.giffys} />

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>


    </div>
  );
};

export default Detail;
