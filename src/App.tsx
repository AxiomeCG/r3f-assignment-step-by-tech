import { Canvas, useThree } from "@react-three/fiber";
import "./App.scss";
import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import { Room } from "./Room";
import { Vector3 } from "three";
import { Bloom, EffectComposer, N8AO, Vignette } from "@react-three/postprocessing";
import { useSnapshot } from "valtio";
import { state } from "./store";
import { KernelSize } from "postprocessing";
import { AnimatePresence, motion } from "framer-motion";

const Scene = () => {


  return <>
    <Room/>
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
  const snap = useSnapshot(state);
  return (
    <>
      <Canvas camera={{position: [0, 1, 5]}} style={{overflow: "hidden"}} >
        <Scene/>
        <CameraControls/>
        <Environment preset={"night"} background={true}/>
        <EffectComposer>
          <N8AO halfRes/>
          <Bloom intensity={0.5} mipmapBlur kernelSize={KernelSize.MEDIUM}/>
          <Vignette/>
        </EffectComposer>
      </Canvas>
      <AnimatePresence>
        {snap.curtainMenuIsOpen && <motion.div
          initial={{x: 200}}
          animate={{x: 0}}
          exit={{x: 200}}
          transition={{duration: 0.3, ease: "easeInOut"}}

          className={"curtain-menu"}>
          <div className={"curtain-menu__wrapper"}>
            <div onClick={() => state.curtainTextureIndex = 0}>0</div>
            <div onClick={() => state.curtainTextureIndex = 1}>1</div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}

export default App;
