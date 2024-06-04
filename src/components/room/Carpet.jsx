import {useSnapshot} from 'valtio';
import {state} from '../../store.js';
import {PivotControls} from '@react-three/drei';
import React, {useEffect, useState} from 'react';

export function Carpet(props) {

  const snap = useSnapshot(state);
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return <PivotControls
    anchor={[-1, 0, 0]}

    visible={snap.movableObject === 'Carpet'}
    disableSliders={snap.movableObject !== 'Carpet'}
    disableAxes={snap.movableObject !== 'Carpet'}
    disableScaling={snap.movableObject !== 'Carpet'}
    disableRotations={snap.movableObject !== 'Carpet'}

    onDragStart={() => {
      state.pivotDragged = true
    }}
    onDragEnd={() => {
      state.pivotDragged = false
    }}
  >
    <mesh
      geometry={props.nodes.Carpet.geometry}
      position={[3.558, 0.033, 2.398]}
      rotation={[Math.PI / 2, 0, 0]}
      visible={hovered}
    >
      <meshStandardMaterial color={'#ffffff'} roughness={0.5} opacity={0.5} transparent={true}/>
    </mesh>
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        if (snap.movableObject === 'Carpet') {
          state.movableObject = null;
        } else {
          state.movableObject = 'Carpet';
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true)
      }}

      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false)
      }}
      castShadow
      receiveShadow
      geometry={props.nodes.Carpet.geometry}
      material={props.materials.Mat_1}
      position={[3.558, 0.033, 2.398]}
      rotation={[Math.PI / 2, 0, 0]}
    />


  </PivotControls>


}
