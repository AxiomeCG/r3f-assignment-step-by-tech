import React, {useMemo} from 'react'
import {useGLTF} from '@react-three/drei'

export function Sofa(props) {
  const {nodes, materials} = useGLTF('/Sofa.glb')

  materials['15 - Default'].normalMap = null;

  const footMaterial = useMemo(() => {
    return <meshStandardMaterial color={'#000000'} roughness={0.4} metalness={0.5}/>
  }, []);

  return (
    <group {...props} dispose={null}>
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
  )
}

useGLTF.preload('/Sofa.glb')
