import React, {useEffect, useMemo, useState} from 'react';
import {MathUtils} from 'three';
import {useSnapshot} from 'valtio';
import {state} from '../../store.js';
import {PivotControls} from '@react-three/drei';

export function Chair(props) {
  const uuid = useMemo(() => MathUtils.generateUUID(), [])
  const snap = useSnapshot(state)
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <PivotControls
      anchor={[0, 0, 0]}
      visible={snap.movableObject === `Chair${uuid}`}
      disableSliders={snap.movableObject !== `Chair${uuid}`}
      disableAxes={snap.movableObject !== `Chair${uuid}`}
      disableScaling={snap.movableObject !== `Chair${uuid}`}
      disableRotations={snap.movableObject !== `Chair${uuid}`}
      onDragStart={() => {
        state.pivotDragged = true
      }}
      onDragEnd={() => {
        state.pivotDragged = false
      }}

    >
      <group {...props} dispose={null}
             onClick={(e) => {
               e.stopPropagation();
               if (snap.movableObject === `Chair${uuid}`) {
                 state.movableObject = null;
               } else {
                 state.movableObject = `Chair${uuid}`;
               }
             }}
             onPointerOver={(e) => {
               e.stopPropagation();
               setHovered(!snap.isOrbiting)
             }}

             onPointerOut={(e) => {
               e.stopPropagation();
               setHovered(false)
             }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Chair001.geometry}
          material={props.materials.zhuoyi}
        />

        <mesh
          geometry={props.nodes.Chair001.geometry}
          visible={hovered}
        >
          <meshStandardMaterial color={'#ffffff'} roughness={0}/>
        </mesh>

      </group>
    </PivotControls>
  )
}
