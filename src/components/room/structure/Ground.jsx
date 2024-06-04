import {MeshReflectorMaterial, Plane} from '@react-three/drei';
import React from 'react';

export function Ground() {
  return <Plane
    castShadow
    receiveShadow
    position={[0, 0.01, 7]}
    args={[15, 30]}
    rotation={[-Math.PI / 2, 0, 0]}
  >
    <MeshReflectorMaterial
      mirror={0.03}
      blur={[1000, 1000]}
      resolution={1024}
      mixBlur={10}
      mixStrength={1}
      roughness={0.1}
      depthScale={1}
      minDepthThreshold={0.4}
      maxDepthThreshold={1.4}
      color="#ffffff"
      metalness={0.1}
      envMapIntensity={0.1}
    />
  </Plane>;
}
