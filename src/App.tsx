import { Canvas } from "@react-three/fiber";
import "./App.scss";
import { Bvh, Environment, Loader } from "@react-three/drei";
import React, { Suspense } from "react";
import { Bloom, EffectComposer, N8AO, Vignette } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import { Overlay } from "./components/ui/Overlay";
import { CameraControls } from "./components/experience/CameraControls";
import { Scene } from "./components/experience/Scene";


function App() {

  return (
    <>
      <Canvas camera={{position: [0, 1, 5]}} style={{overflow: "hidden"}}>
        <Suspense fallback={null}>
          <Bvh firstHitOnly>
            <Scene/>
          </Bvh>
          <CameraControls/>
          <Environment preset={"night"} background={true}/>
          <EffectComposer>
            <N8AO halfRes quality={"performance"}/>
            <Bloom intensity={0.5} mipmapBlur kernelSize={KernelSize.MEDIUM}/>
            <Vignette/>
          </EffectComposer>
        </Suspense>

      </Canvas>
      <Overlay/>

      <Loader/>

    </>
  );
}

export default App;
