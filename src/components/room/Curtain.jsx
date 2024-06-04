import {useTexture} from '@react-three/drei';
import {useSnapshot} from 'valtio';
import {resetMenu, state} from '../../store.js';
import React from 'react';

export function Curtain(props) {

  const [ao, diffuse, normal, roughness] = useTexture(['/curtain/leather/leather_white_ao_1k.jpg', '/curtain/leather/leather_white_diff_1k.jpg', '/curtain/leather/leather_white_nor_gl_1k.png', '/curtain/leather/leather_white_rough_1k.png'])
  const [ao2, diffuse2, normal2, roughness2] = useTexture(['/curtain/leather-black/black-leather_ao.png', '/curtain/leather-black/black-leather_albedo.png', '/curtain/leather-black/black-leather_normal-ogl.png', '/curtain/leather-black/black-leather_roughness.png'])

  const snap = useSnapshot(state)
  return (
    <>
      <group {...props} dispose={null} onClick={() => {
        resetMenu()
        state.curtainMenuIsOpen = !state.curtainMenuIsOpen
      }}>
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
        </mesh>
      </group>
    </>
  )
}