import React from 'react';
import { Canvas } from '@react-three/fiber';
import { XR, createXRStore } from '@react-three/xr';
import { useNavigation } from '../Components/UseNavigation';
import NavigationPath from '../Components/NavigationPath';

const store = createXRStore({
  hand: false,
  hitTest: true
});

export default function ItemFinderAR() {
  const { targetCoords, fetchProductLocation } = useNavigation();

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <button 
        style={{ position: 'absolute', zIndex: 100, top: '20px', left: '20px' }}
        onClick={() => store.enterAR()}
      >
        Enter AR / دخول الواقع المعزز
      </button>

      <Canvas>
        <XR store={store}>
          <ambientLight intensity={0.5} />
          <NavigationPath target={targetCoords} />
        </XR>
      </Canvas>
    </div>
  );
}