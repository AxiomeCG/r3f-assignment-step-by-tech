import { Canvas, useThree } from "@react-three/fiber";
import "./App.scss";
import { Environment, Helper, OrbitControls } from "@react-three/drei";
import React from "react";
import { Room } from "./Room";
import { PointLightHelper, Vector3 } from "three";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { useSnapshot } from "valtio";
import { state } from "./store";

const Lights = () => {
  return <>
    <pointLight position={[-1.6, 4.4, -4.7]} intensity={10}>
      <Helper type={PointLightHelper}/>
    </pointLight>

    <pointLight position={[-2, 4.4, 2]} intensity={10}>
      <Helper type={PointLightHelper}/>
    </pointLight>
    <pointLight position={[3.7, 4.4, 2]} intensity={10}>
      <Helper type={PointLightHelper}/>
    </pointLight>

    <pointLight position={[6.5, 2.4, 5.5]} intensity={10}>
      <Helper type={PointLightHelper}/>
    </pointLight>
  </>
}

const Scene = () => {


  return <>
    <Room/>
    <Lights/>
  </>
}

const CameraControls = () => {
  const snap = useSnapshot(state);

  const three = useThree();
  return <OrbitControls enabled={!snap.pivotDragged} onChange={(e) => {
    three.camera.position.clamp(new Vector3(-5, 1, -7), new Vector3(7, 5, 7))
  }}/>
}


function App() {

  return (
    <>
      <Canvas camera={{position: [0, 1, 5]}}>
        <Scene/>
        <CameraControls/>
        <Environment preset={"night"} background={true}/>
        <EffectComposer>
          <N8AO halfRes/>
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;
