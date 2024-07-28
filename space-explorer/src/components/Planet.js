import React from 'react';
import { useParams } from 'react-router-dom';

const Planet = () => {
  const planets = [
    {
      id: 1,
      name: "Earth",
      description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It has a diverse climate and geography."
    },
    {
      id: 2,
      name: "Mars",
      description: "Mars is the fourth planet from the Sun and is often called the 'Red Planet' due to its reddish appearance. It has the largest volcano and canyon in the solar system."
    },
    {
      id: 3,
      name: "Jupiter",
      description: "Jupiter is the fifth planet from the Sun and the largest in the solar system. It is a gas giant known for its Great Red Spot and many moons."
    }
  ];
  
  let { id } = useParams();
  id = parseInt(id, 10) - 1; // Convert id to a number and adjust for array indexing

  if (id < 0 || id >= planets.length) {
    return <div>Planet not found</div>;
  }

  const planet = planets[id];

  return (
    <div>
      <h1>Planet</h1>
      <h1>{planet.name}</h1>
      <p>{planet.description}</p>
    </div>
  );
}

export default Planet;
