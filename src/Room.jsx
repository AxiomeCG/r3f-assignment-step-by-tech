/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import {Box, MeshReflectorMaterial, MeshTransmissionMaterial, useGLTF} from '@react-three/drei'
import {Sofa} from './components/room/Sofa.jsx';
import {Carpet} from './components/room/Carpet.jsx';
import {Table} from './components/room/Table.jsx';
import {Chair} from './components/room/Chair.jsx';
import {FloorLamp} from './components/room/FloorLamp.jsx';
import {TableLamp} from './components/room/TableLamp.jsx';
import {CeilingLamp} from './components/room/CeilingLamp.jsx';
import {Wall1} from './components/room/structure/Wall1.jsx';
import {Wall2} from './components/room/structure/Wall2.jsx';
import {Wall3} from './components/room/structure/Wall3.jsx';
import {Curtain} from './components/room/Curtain.jsx';
import {Ground} from './components/room/structure/Ground.jsx';
import {Ceiling} from './components/room/structure/Ceiling.jsx';


const MovableObjects = (props) => {

  return <>
    <Carpet nodes={props.nodes} materials={props.materials}/>
    <Sofa/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-2.287, 1.093, -5.6]} rotation-y={Math.PI}/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-1, 1.093, -5.6]} rotation-y={Math.PI}/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-2.287, 1.093, -3.6]}/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-1, 1.093, -3.6]}/>
    <Table nodes={props.nodes} materials={props.materials}/>
  </>
}


function GlassWindow(props) {
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.GlassWindow.geometry}
    position={[-5.604, 3.35, -4.5]}
    rotation={[0, 0, -Math.PI / 2]}
  >
    <MeshTransmissionMaterial
      clearcoat={1}
      clearcoatRoughness={0}
      transmission={1}
      chromaticAberration={0.03}
      anisotrophicBlur={0.1}
      roughness={0}
      thickness={0.2}
      ior={1.1}
      distortion={0.1}
      distortionScale={0.2}
      temporalDistortion={0.2}
      transmissionSampler={true}
    />

  </mesh>;
}

function BigGlassWindow(props) {
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.BigGlassWindow.geometry}
    material={props.materials['Material.001']}
    position={[1., 4.75, 22.022]}
    rotation={[-Math.PI / 2, 0, 0]}
  >
    <MeshTransmissionMaterial
      clearcoat={1}
      clearcoatRoughness={0}
      transmission={1}
      chromaticAberration={0.03}
      anisotrophicBlur={0.1}
      roughness={0}
      thickness={0.2}
      ior={1.1}
      distortion={0.1}
      distortionScale={0.2}
      temporalDistortion={0.2}
      transmissionSampler={true}

    />
  </mesh>;
}

function Window(props) {
  return <group>
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.Rod.geometry}
      material={props.materials.lambert1}
      position={[-5.397, 4.189, -5.601]}
      rotation={[Math.PI / 2, 0, 0]}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.WindowFrame.geometry}
      material={props.materials.lambert1}
      position={[-5.536, 2.985, -4.646]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  </group>;
}

function TV(props) {
  return <group position={[-5.449, 2.815, 2.487]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.Plane001.geometry}
      material={props.materials.Black}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.Plane001_1.geometry}
      material={props.materials.RedLight}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.Plane001_2.geometry}
      material={props.materials.Screen1}
    />
  </group>;
}

function TVStand(props) {
  return <group position={[-5.075, 0.499, 2.445]} rotation={[0, 1.571, 0]}>
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.Circle007.geometry}
      material={props.materials.tvstandmetal}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes.Circle007_1.geometry}
      material={props.materials.tvstand}
    />
  </group>;
}

function Stair() {
  return <Box
    castShadow
    receiveShadow
    position={[1, 0.15, -5.486]}
    args={[14, 6, 0.25]}
    rotation={[-Math.PI / 2, 0, 0]}
  >
    <MeshReflectorMaterial
      mirror={0.05}
      blur={[1000, 100]}
      resolution={512}
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
  </Box>;
}

function Paintings(props) {
  return <group position={[-1.662, 3.611, -7.468]} rotation={[Math.PI / 2, 0, 0]} scale={1.502}>
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes['Abstract-Art-3X001_1'].geometry}
      material={props.materials.FrontColor}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes['Abstract-Art-3X001_2'].geometry}
      material={props.materials.abstract_1}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes['Abstract-Art-3X001_3'].geometry}
      material={props.materials.abstract_2}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={props.nodes['Abstract-Art-3X001_4'].geometry}
      material={props.materials._abstract_3}
    />
  </group>;
}

function VanGoghPainting(props) {
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.VanGogh.geometry}
    material={props.materials['Material.003']}
    position={[3.709, 3.506, 7.515]}
    rotation={[-Math.PI / 2, 0, -Math.PI]}
    scale={0.496}
  />;
}

function Wall4(props) {
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.Wall003.geometry}
    material={props.nodes.Wall003.material}
    position={[7.075, 2.45, 7.828]}
    rotation={[0, Math.PI / 2, 0]}
  >
    <meshStandardMaterial roughness={1}/>
  </mesh>;
}

function Wall5(props) {
  return <mesh
    castShadow
    receiveShadow
    geometry={props.nodes.Wall004.geometry}
    position={[0.961, 2.45, 22.047]}
    rotation={[0, Math.PI / 2, 0]}
  >
    <meshStandardMaterial roughness={1}/>
  </mesh>;
}

export function Room(props) {
  const {nodes, materials} = useGLTF('/RoomDubai.glb')
  return (
    <group {...props} dispose={null}>
      <VanGoghPainting nodes={nodes} materials={materials}/>
      <Paintings nodes={nodes} materials={materials}/>
      <MovableObjects nodes={nodes} materials={materials}/>


      <CeilingLamp position={[3.644, 4.268, 2.245]} rotation={[0, Math.PI / 2, 0]} lightPosition={[0, -0.5, 0]}
                   nodes={nodes} materials={materials}/>
      <CeilingLamp position={[-2.052, 4.268, 2.245]} rotation={[0, Math.PI / 2, 0]} lightPosition={[0, -0.5, 0]}
                   nodes={nodes} materials={materials}/>
      <TableLamp position={[-1.607, 5.84, -4.68]}
                 nodes={nodes} materials={materials}/>
      <FloorLamp nodes={nodes} materials={materials}/>



      <TV nodes={nodes} materials={materials}/>
      <TVStand nodes={nodes} materials={materials}/>
      <Ground/>
      <Stair/>
      <Ceiling nodes={nodes}/>
      <Wall1 nodes={nodes}/>
      <Wall2 nodes={nodes}/>
      <Wall3 nodes={nodes}/>
      <Wall4 nodes={nodes}/>
      <Wall5 nodes={nodes}/>
      <Window nodes={nodes} materials={materials}/>
      <GlassWindow nodes={nodes}/>
      <BigGlassWindow nodes={nodes} materials={materials}/>
      <Curtain geometry={nodes.Curtain_1.geometry}
               materials={materials}
               position={[-5.413, 2.426, -5.125]}
               rotation={[Math.PI / 2, 0, 0]}/>
      <Curtain geometry={nodes.Curtain_2.geometry}
               materials={materials}
               position={[-5.506, 3.119, -3.279]}
               rotation={[Math.PI / 2, 0, 0]}/>
    </group>
  )
}

useGLTF.preload('/RoomDubai.glb')
