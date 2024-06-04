import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useFrame} from '@react-three/fiber';
import {MathUtils} from 'three';
import {Sphere} from '@react-three/drei';

export function CeilingLamp(props) {
  const pointLightRef = useRef()
  const isOnRef = useRef(true)
  const material = useMemo(() => props.materials.Plastico.clone(), []);

  useFrame(() => {
    pointLightRef.current.intensity = MathUtils.lerp(pointLightRef.current.intensity, isOnRef.current ? 20 : 0, 0.05);
    material.emissiveIntensity = MathUtils.lerp(material.emissiveIntensity, isOnRef.current ? 7 : 0, 0.05);
  })
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <group {...props} dispose={null}>
      <Sphere args={[0.5, 8, 8]}
              visible={false}
              onClick={(e) => {
                e.stopPropagation();
                isOnRef.current = !isOnRef.current
              }}

              onPointerOver={(e) => {
                e.stopPropagation();
                setHovered(true)
              }}

              onPointerOut={(e) => {
                e.stopPropagation();
                setHovered(false)
              }}
      />

      <pointLight ref={pointLightRef} position={props.lightPosition} intensity={20} color={'#f8e5bd'}>
        {/*<Helper type={PointLightHelper}/>*/}
      </pointLight>
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Object_42.geometry}
        material={props.materials.Metal_Escuro}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Object_42_1.geometry}
        material={props.materials.Metal_Branco}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Object_42_2.geometry}
        material={material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Object_42_3.geometry}
        material={props.materials.Material_214597}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Object_42_4.geometry}
        material={props.materials.cromado}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Object_42_5.geometry}
        material={props.materials.Fio2}
      />
      <mesh

        geometry={props.nodes.Object_42_3.geometry}
        visible={hovered}
      >
        <meshStandardMaterial color={'#ffffff'} roughness={0.5} />
      </mesh>
    </group>
  )
}
