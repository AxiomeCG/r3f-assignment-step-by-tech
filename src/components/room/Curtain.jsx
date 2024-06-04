import {useTexture} from '@react-three/drei';
import {useSnapshot} from 'valtio';
import {resetMenu, state} from '../../store.js';
import React, {useEffect, useState} from 'react';

export function Curtain(props) {

  const [ao, diffuse, normal, roughness] = useTexture(['/curtain/leather/leather_white_ao_1k.jpg', '/curtain/leather/leather_white_diff_1k.jpg', '/curtain/leather/leather_white_nor_gl_1k.png', '/curtain/leather/leather_white_rough_1k.png'])
  const [ao2, diffuse2, normal2, roughness2] = useTexture(['/curtain/leather-black/black-leather_ao.png', '/curtain/leather-black/black-leather_albedo.png', '/curtain/leather-black/black-leather_normal-ogl.png', '/curtain/leather-black/black-leather_roughness.png'])
  const [ao3, diffuse3, normal3, roughness3] = useTexture(['/curtain/coarse/coarse-loose-fabric_ao.png', '/curtain/coarse/coarse-loose-fabric_albedo.png', '/curtain/coarse/coarse-loose-fabric_normal-ogl.png', '/curtain/coarse/coarse-loose-fabric_roughness.png'])

  const snap = useSnapshot(state)

  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <>
      <group {...props} dispose={null}
             onClick={(e) => {
               e.stopPropagation();
               resetMenu()
               state.curtainMenuIsOpen = !state.curtainMenuIsOpen
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
          geometry={props.geometry}
          material={props.materials.Curtain}
        >
          {snap.curtainTextureIndex === 0
            && <meshStandardMaterial map={diffuse} aoMap={ao} normalMap={normal} roughnessMap={roughness}/>}
          {snap.curtainTextureIndex === 1
            && <meshStandardMaterial map={diffuse2} aoMap={ao2} normalMap={normal2} roughnessMap={roughness2}/>}
          {snap.curtainTextureIndex === 2
            && <meshStandardMaterial map={diffuse3} aoMap={ao3} normalMap={normal3} roughnessMap={roughness3}/>}
        </mesh>

        <mesh

          geometry={props.geometry}
          material={props.materials.Curtain}
          visible={hovered}
        >
          <meshStandardMaterial color={'#ffffff'} roughness={0.5} opacity={0.5} transparent={true}/>
        </mesh>
      </group>
    </>
  )
}
