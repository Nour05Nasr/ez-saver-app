import React from 'react';
import { Line } from '@react-three/drei';

export default function NavigationPath({ target }) {
  // If no target is selected, don't render anything
  if (!target) return null;

  // Ensure commas separate each coordinate array
  const points = [
    [0, -1, 0],       // User's starting position (Origin)
    [target[0], -1, target[2]] // Target destination [x, y, z]
  ];

  return (
    <Line 
      points={points} 
      color="#FA921D" 
      lineWidth={5} 
    />
  );
}