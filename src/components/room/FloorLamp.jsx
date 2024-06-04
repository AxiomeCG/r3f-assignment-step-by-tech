import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {MathUtils} from 'three';

export function FloorLamp(props) {
  const pointLightRef = useRef()
  const materialRef = useRef()
  const isOnRef = useRef(true)

  useFrame(() => {
    pointLightRef.current.intensity = MathUtils.lerp(pointLightRef.current.intensity, isOnRef.current ? 6 : 0, 0.05);
    materialRef.current.emissiveIntensity = MathUtils.lerp(materialRef.current.emissiveIntensity, isOnRef.current ? 7 : 0, 0.05);
  })

  return (
    <group {...props} dispose={null} onClick={(e) => {
      e.stopPropagation();
      isOnRef.current = !isOnRef.current
    }}>
      <pointLight ref={pointLightRef} position={[6.1, 2.4, 5.5]} intensity={6} color={'#f8e5bd'}>
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
      />
    </group>
  )
}
