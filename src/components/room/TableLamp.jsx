import React, {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {MathUtils} from 'three';
import {Sphere} from '@react-three/drei';

export function TableLamp(props) {
  const pointLightRef = useRef()
  const isOnRef = useRef(true)
  useFrame(() => {
    pointLightRef.current.intensity = MathUtils.lerp(pointLightRef.current.intensity, isOnRef.current ? 30 : 0, 0.05);
  })

  return (
    <group {...props} dispose={null}>
      <Sphere visible={false} onClick={(e) => {
        e.stopPropagation();
        isOnRef.current = !isOnRef.current
      }}/>

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
    </group>
  )
}
