import React, {useEffect, useMemo, useState} from 'react'
import {Bvh, PivotControls, useGLTF} from '@react-three/drei'
import {state} from '../../store.js';
import {useSnapshot} from 'valtio';

export function Sofa(props) {
  const {nodes, materials} = useGLTF('/Sofa.glb')

  materials['15 - Default'].normalMap = null;

  const footMaterial = useMemo(() => {
    return <meshStandardMaterial color={'#000000'} roughness={0.4} metalness={0.5}/>
  }, []);
  const snap = useSnapshot(state);

  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (

    <PivotControls
      visible={snap.movableObject === 'Sofa'}
      disableSliders={snap.movableObject !== 'Sofa'}
      disableAxes={snap.movableObject !== 'Sofa'}
      disableScaling={snap.movableObject !== 'Sofa'}
      disableRotations={snap.movableObject !== 'Sofa'}
      anchor={[0, 0, 0]}
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
                 if (snap.movableObject === 'Sofa') {
                   state.movableObject = null;
                 } else {
                   state.movableObject = 'Sofa';
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
          <group position={[6.088, 0.665, 1.187]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sofa001_1.geometry}
              material={materials['Mat3d66-713023-7-5315']}

            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sofa001_2.geometry}
              material={materials['15 - Default']}

            />

            <mesh
              geometry={nodes.Sofa001_2.geometry}
              visible={hovered}
            >
              <meshStandardMaterial color={'#ffffff'} roughness={0} transparent opacity={0.5}/>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sofa001_3.geometry}
            >

              {footMaterial}

            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sofa001_4.geometry}

            >
              {footMaterial}
            </mesh>
          </group>
        </group>

    </PivotControls>
  )
}

useGLTF.preload('/Sofa.glb')
