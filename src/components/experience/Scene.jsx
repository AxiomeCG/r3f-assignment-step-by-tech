import {Room} from '../../Room.jsx';
import {Preload} from '@react-three/drei';
import React from 'react';

export const Scene = () => {
  return <>
    <Room/>
    <Preload all/>
  </>
}
