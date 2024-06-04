import React, {useEffect, useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';
import {useSnapshot} from 'valtio';
import {state} from '../../store.js';
import {damp} from 'maath/easing';

export function FloorLamp(props) {
  const pointLightRef = useRef()
  const materialRef = useRef()
  const isOnRef = useRef(true)
  const snap = useSnapshot(state)

  useFrame((state, delta) => {
    damp(pointLightRef.current, 'intensity', isOnRef.current ? 6 : 0, 0.1, delta)
    damp(materialRef.current, 'emissiveIntensity', isOnRef.current ? 7 : 0, 0.1, delta)
  })
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <group {...props} dispose={null} onClick={(e) => {
      e.stopPropagation();
      isOnRef.current = !isOnRef.current
    }}


    >
      <pointLight ref={pointLightRef} position={[6.1, 2.4, 5.5]} intensity={6} color={'#f8e5bd'} castShadow>
        {/*<Helper type={PointLightHelper}/>*/}
      </pointLight>
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.FloorLamp001.geometry}
        position={[6.32, 2.223, 5.553]}

      >
        <meshStandardMaterial ref={materialRef} map={props.materials['Material.008'].map} emissive={'#fbeae0'}
                              emissiveIntensity={5}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.FloorLamp.geometry}
        material={props.materials['Material.004']}
        position={[6.32, 2.223, 5.553]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(!snap.isOrbiting)
        }}

        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false)
        }}
      />
    </group>
  )
}
