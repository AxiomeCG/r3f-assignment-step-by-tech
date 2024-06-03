import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Environment, Helper, OrbitControls } from "@react-three/drei";
import React from "react";
import { Room } from "./Room";
import { PointLightHelper } from "three";

const Lights = () => {
  return <>
    <pointLight position={[-1.6, 5.4, -4.7]} intensity={10}>
      <Helper type={PointLightHelper}/>
    </pointLight>

    <pointLight position={[-2, 5.4, 2]} intensity={10}>
      <Helper type={PointLightHelper}/>
    </pointLight>
    <pointLight position={[3.7, 5.4, 2]} intensity={10}>
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


function App() {
  return (
    <>
    <Canvas>
        <Scene/>
        <OrbitControls/>
        <Environment preset={"night"}/>
      </Canvas>
    </>
  );
}

export default App;
