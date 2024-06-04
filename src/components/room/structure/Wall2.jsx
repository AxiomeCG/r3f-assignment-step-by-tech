import {useTexture} from '@react-three/drei';
import {RepeatWrapping} from 'three';
import {useSnapshot} from 'valtio';
import {resetMenu, state} from '../../../store.js';
import React, {useEffect, useState} from 'react';

export function Wall2(props) {
  const [diffuse, ao, normal, roughness] = useTexture([
    '/curtain/leather-black/black-leather_albedo.png',
    '/curtain/leather-black/black-leather_ao.png',
    '/curtain/leather-black/black-leather_normal-ogl.png',
    '/curtain/leather-black/black-leather_roughness.png'
  ])

  const [diffuse2, ao2, normal2, roughness2] = useTexture([
    '/wall/stone/stacked-stone-siding_albedo.png',
    '/wall/stone/stacked-stone-siding_ao.png',
    '/wall/stone/stacked-stone-siding_normal-ogl.png',
    '/wall/stone/stacked-stone-siding_roughness.png'
  ])

  diffuse2.repeat.set(4, 2);
  diffuse2.wrapS = diffuse2.wrapT = RepeatWrapping;
  ao2.repeat.set(4, 2);
  ao2.wrapS = ao2.wrapT = RepeatWrapping;
  normal2.repeat.set(4, 2);
  normal2.wrapS = normal2.wrapT = RepeatWrapping;
  roughness2.repeat.set(4, 2);
  roughness2.wrapS = roughness2.wrapT = RepeatWrapping;


  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  const snap = useSnapshot(state)
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.Wall001.geometry}
    material={props.nodes.Wall001.material}
    position={[-5.908, 2.45, -0.229]}
    onPointerOver={() => setHovered(!snap.isOrbiting)}
    onPointerOut={() => setHovered(false)}
    onClick={() => {
      resetMenu()
      state.wall2MenuIsOpen = !state.wall1MenuIsOpen
    }}
  >
    {snap.wall2TextureIndex === 0 && <meshStandardMaterial roughness={1}/>}
    {snap.wall2TextureIndex === 1 &&
      <meshStandardMaterial map={diffuse} aoMap={ao} normalMap={normal} roughnessMap={roughness}/>}
    {snap.wall2TextureIndex === 2 &&
      <meshStandardMaterial map={diffuse2} aoMap={ao2} normalMap={normal2} roughnessMap={roughness2}/>}

  </mesh>
}
