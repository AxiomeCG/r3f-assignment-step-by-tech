import {useSnapshot} from 'valtio';
import {state} from '../../store.js';
import {PivotControls} from '@react-three/drei';
import React, {useEffect, useState} from 'react';

export function Table(props) {
  const snap = useSnapshot(state);
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (

    <PivotControls
      anchor={[-1, 0.2, 0]}
      visible={snap.movableObject === 'Table'}
      disableSliders={snap.movableObject !== 'Table'}
      disableAxes={snap.movableObject !== 'Table'}
      disableScaling={snap.movableObject !== 'Table'}
      disableRotations={snap.movableObject !== 'Table'}
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
               if (snap.movableObject === 'Table') {
                 state.movableObject = null;
               } else {
                 state.movableObject = 'Table';
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
          geometry={props.nodes.Candle.geometry}
          material={props.materials.niunai}
          position={[-1.692, 1.452, -4.604]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Candle002.geometry}
          material={props.materials.niunai}
          position={[-1.692, 1.452, -4.604]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Glass001.geometry}
          material={props.materials.boli}
          position={[-1.694, 1.452, -4.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Glass.geometry}
          material={props.materials.boli}
          position={[-1.694, 1.452, -4.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Dishes.geometry}
          material={props.materials.qita}
          position={[-1.694, 1.452, -4.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Leafs.geometry}
          material={props.materials.lvzhi}
          position={[-1.694, 1.452, -4.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Table.geometry}
          material={props.materials.zhuoyi}
          position={[-1.694, 1.452, -4.606]}
        />

        <mesh
          geometry={props.nodes.Table.geometry}
          position={[-1.694, 1.452, -4.606]}
          visible={hovered}
        >
          <meshStandardMaterial color={'#ffffff'} roughness={0}/>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.TableCloth001.geometry}
          material={props.materials.bu}
          position={[-1.694, 1.452, -4.606]}
        />
      </group>
    </PivotControls>
  )
}
