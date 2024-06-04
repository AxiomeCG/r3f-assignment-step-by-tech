import React, {useEffect, useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';
import {MathUtils} from 'three';
import {Sphere} from '@react-three/drei';
import {useSnapshot} from 'valtio';
import {state} from '../../store.js';

export function TableLamp(props) {
  const pointLightRef = useRef()
  const isOnRef = useRef(true)
  const snap = useSnapshot(state)

  useFrame(() => {
    pointLightRef.current.intensity = MathUtils.lerp(pointLightRef.current.intensity, isOnRef.current ? 30 : 0, 0.05);
  })
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (<group {...props} dispose={null}>
    <Sphere visible={false}
            onClick={(e) => {
              e.stopPropagation();
              isOnRef.current = !isOnRef.current
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(!snap.isOrbiting)
            }}

            onPointerOut={(e) => {
              e.stopPropagation();
              setHovered(false)
            }}
    />

    <pointLight ref={pointLightRef} position={[0, -2, 0]} intensity={40} color={'#f8e5bd'}>
      {/*<Helper type={PointLightHelper}/>*/}
    </pointLight>
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.TableLamp.geometry}
      material={props.materials._1___Default}
      rotation={[Math.PI / 2, 0, 0]}
    />
  </group>)
}
