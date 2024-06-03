/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useMemo} from 'react'
import {Box, MeshReflectorMaterial, MeshTransmissionMaterial, PivotControls, Plane, useGLTF} from '@react-three/drei'
import {BackSide, MathUtils} from 'three';
import {Sofa} from './Sofa.jsx';
import {useSnapshot} from 'valtio';
import {state} from './store.js';



function Table(props) {
  const snap = useSnapshot(state);

  return (

    <PivotControls
      anchor={[-1, 0.2, 0]}
      visible={snap.movableObject === 'Table'}
      onDragStart={() => {
        state.pivotDragged = true
      }}
      onDragEnd={() => {
        state.pivotDragged = false
      }}
    >
    <group {...props} dispose={null}
           onClick={(e) => {
             e.stopPropagation();
             if (snap.movableObject === 'Table') {
               state.movableObject = null;
             } else {
               state.movableObject = 'Table';
             }
           }}
    >

      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Candle.geometry}
        material={props.materials.niunai}
        position={[-1.692, 1.452, -4.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Candle002.geometry}
        material={props.materials.niunai}
        position={[-1.692, 1.452, -4.604]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Glass001.geometry}
        material={props.materials.boli}
        position={[-1.694, 1.452, -4.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Glass.geometry}
        material={props.materials.boli}
        position={[-1.694, 1.452, -4.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Dishes.geometry}
        material={props.materials.qita}
        position={[-1.694, 1.452, -4.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Leafs.geometry}
        material={props.materials.lvzhi}
        position={[-1.694, 1.452, -4.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.Table.geometry}
        material={props.materials.zhuoyi}
        position={[-1.694, 1.452, -4.606]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.nodes.TableCloth001.geometry}
        material={props.materials.bu}
        position={[-1.694, 1.452, -4.606]}
      />
    </group>
    </PivotControls>
  )
}

function Carpet(props) {

  const snap = useSnapshot(state);

  return <PivotControls
    anchor={[-1,0,0]}
    visible={snap.movableObject === 'Carpet'}
    onDragStart={() => {
      state.pivotDragged = true
    }}
    onDragEnd={() => {
      state.pivotDragged = false
    }}
  >
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        if (snap.movableObject === 'Carpet') {
          state.movableObject = null;
        } else {
          state.movableObject = 'Carpet';
        }
      }}
      castShadow
      receiveShadow
      geometry={props.nodes.Carpet.geometry}
      material={props.materials.Mat_1}
      position={[3.558, 0.033, 2.398]}
      rotation={[Math.PI / 2, 0, 0]}
    />

  </PivotControls>


}


function Chair(props) {
  const uuid = useMemo(() => MathUtils.generateUUID(), [])
  const snap = useSnapshot(state)
  return (
    <PivotControls
      anchor={[0, 0, 0]}
      visible={snap.movableObject === `Chair${uuid}`}
      onDragStart={() => {
        state.pivotDragged = true
      }}
      onDragEnd={() => {
        state.pivotDragged = false
      }}
    >
      <group {...props} dispose={null} onClick={(e) => {
        e.stopPropagation();
        if (snap.movableObject === `Chair${uuid}`) {
          state.movableObject = null;
        } else {
          state.movableObject = `Chair${uuid}`;
        }
      }}>
        <mesh
          castShadow
          receiveShadow
          geometry={props.nodes.Chair001.geometry}
          material={props.materials.zhuoyi}
        />

      </group>
    </PivotControls>
  )
}

const MovableObjects = (props) => {

  return <>
    <Carpet nodes={props.nodes} materials={props.materials}/>
    <Sofa/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-2.287, 1.093, -5.6]} rotation-y={Math.PI}/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-1, 1.093, -5.6]} rotation-y={Math.PI}/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-2.287, 1.093, -3.6]}/>
    <Chair nodes={props.nodes} materials={props.materials} position={[-1, 1.093, -3.6]}/>
    <Table nodes={props.nodes} materials={props.materials} />
  </>
}

export function Room(props) {
  const {nodes, materials} = useGLTF('/RoomDubai.glb')
  return (
    <group {...props} dispose={null}>

      <MovableObjects nodes={nodes} materials={materials}/>
      <Plane
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
      </Plane>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FloorLamp.geometry}
        material={materials['Material.008']}
        position={[6.32, 2.223, 5.553]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling.geometry}
        position={[-2.584, 4.942, 0]}
      >
        <meshStandardMaterial color="#ffffff" side={BackSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassWindow.geometry}
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

      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigGlassWindow.geometry}
        material={materials['Material.001']}
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
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TableLamp.geometry}
        material={materials._1___Default}
        position={[-1.607, 5.84, -4.68]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[3.644, 4.268, 2.245]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Metal_Escuro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42_1.geometry}
          material={materials.Metal_Branco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42_2.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42_3.geometry}
          material={materials.Material_214597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42_4.geometry}
          material={materials.cromado}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42_5.geometry}
          material={materials.Fio2}
        />
      </group>
      <group position={[-2.052, 4.268, 2.245]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42001.geometry}
          material={materials.Metal_Escuro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42001_1.geometry}
          material={materials.Metal_Branco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42001_2.geometry}
          material={materials.Plastico}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42001_3.geometry}
          material={materials.Material_214597}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42001_4.geometry}
          material={materials.cromado}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42001_5.geometry}
          material={materials.Fio2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rod.geometry}
        material={materials.lambert1}
        position={[-5.397, 4.189, -5.601]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WindowFrame.geometry}
        material={materials.lambert1}
        position={[-5.536, 2.985, -4.646]}
        rotation={[Math.PI / 2, 0, 0]}
      />


      <group position={[-5.449, 2.815, 2.487]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.RedLight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.Screen1}
        />
      </group>
      <group position={[-5.075, 0.499, 2.445]} rotation={[0, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials.tvstandmetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials.tvstand}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall.geometry}
        material={nodes.Wall.material}
        position={[7.791, 2.45, -0.229]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall001.geometry}
        material={nodes.Wall001.material}
        position={[-5.908, 2.45, -0.229]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall002.geometry}
        material={nodes.Wall002.material}
        position={[0, 0.886, -8.44]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall003.geometry}
        material={nodes.Wall003.material}
        position={[7.075, 2.45, 7.828]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall004.geometry}
        material={nodes.Wall004.material}
        position={[0.961, 2.45, 22.047]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtain_2.geometry}
        material={materials.Curtain}
        position={[-5.506, 3.119, -3.279]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curtain_1.geometry}
        material={materials.Curtain}
        position={[-5.413, 2.426, -5.125]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <Box
        castShadow
        receiveShadow
        position={[1, 0.15, -5.486]}
        args={[14, 6, 0.25]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <MeshReflectorMaterial
          mirror={0.05}
          blur={[1000, 100]}
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
      </Box>
    </group>
  )
}

useGLTF.preload('/RoomDubai.glb')
