import {BackSide} from 'three';
import React from 'react';

export function Ceiling(props) {
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.Ceiling.geometry}
    position={[-2.584, 4.942, 0]}
  >
    <meshStandardMaterial color="#ffffff" side={BackSide}/>
  </mesh>;
}
