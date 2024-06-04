import { Canvas, useThree } from "@react-three/fiber";
import "./App.scss";
import { Bvh, Environment, Loader, OrbitControls, Preload } from "@react-three/drei";
import React, { Suspense } from "react";
import { Room } from "./Room";
import { Vector3 } from "three";
import { Bloom, EffectComposer, N8AO, Vignette } from "@react-three/postprocessing";
import { useSnapshot } from "valtio";
import { resetMenu, state } from "./store";
import { KernelSize } from "postprocessing";
import { AnimatePresence, motion } from "framer-motion";

const Scene = () => {


  return <>
    <Room/>
    <Preload all/>
  </>
}

const CameraControls = () => {
  const snap = useSnapshot(state);

  const three = useThree();
  return <OrbitControls enabled={!snap.pivotDragged}
                        onStart={() => {
                          state.isOrbiting = true
                          three.raycaster.layers.disableAll();
                        }}
                        onChange={(e) => {
    three.camera.position.clamp(new Vector3(-5, 1, -7), new Vector3(7, 5, 7))
  }}
                        onEnd={() => {
                          state.isOrbiting = false
                          three.raycaster.layers.enableAll();

                        }}
  />
}


function Overlay() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.curtainMenuIsOpen && <motion.div
        key={"curtain"}
        initial={{x: 200}}
        animate={{x: 0}}
        exit={{x: 200}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        onClick={() => {
          resetMenu()
        }}
        className={"curtain-menu"}>
        <div className={"curtain-menu__wrapper"}>
          <h2>Curtains</h2>
          <div onClick={() => {
            state.curtainTextureIndex = 0
            resetMenu();
          }}>
            <img src={"/curtain/leather/leather_white_diff_1k.jpg"} width={100} height={100}/>
          </div>
          <div onClick={() => {
            state.curtainTextureIndex = 1
            resetMenu();
          }}>
            <img src={"/curtain/leather-black/black-leather_albedo.png"} width={100} height={100}/>

          </div>

          <div onClick={() => {
            state.curtainTextureIndex = 2
            resetMenu();
          }}>
            <img src={"/curtain/coarse/coarse-loose-fabric_albedo.png"} width={100} height={100}/>

          </div>
        </div>
      </motion.div>}

      {snap.wall1MenuIsOpen && <motion.div
        key={"wall1"}
        initial={{x: 200}}
        animate={{x: 0}}
        exit={{x: 200}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        onClick={() => {
          resetMenu()
        }}

        className={"wall1-menu"}>
        <div className={"wall1-menu__wrapper"}>
          <h2>Wall 1</h2>
          <div onClick={() => {
            state.wall1TextureIndex = 0;
            resetMenu();
          }}>
            <div style={{width: 100, height: 100, background: "#ffffff"}}/>
          </div>
          <div onClick={() => {
            state.wall1TextureIndex = 1;
            resetMenu();
          }}>
            <img src={"/curtain/leather-black/black-leather_albedo.png"} width={100} height={100}/>

          </div>
          <div onClick={() => {
            state.wall1TextureIndex = 2;
            resetMenu();
          }}>
            <img src={"/wall/stone/stacked-stone-siding_albedo.png"} width={100} height={100}/>

          </div>
        </div>
      </motion.div>}
      {snap.wall2MenuIsOpen && <motion.div
        key={"wall2"}
        initial={{x: 200}}
        animate={{x: 0}}
        exit={{x: 200}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        onClick={() => {
          resetMenu()
        }}

        className={"wall1-menu"}>
        <div className={"wall1-menu__wrapper"}>
          <h2>Wall 2</h2>
          <div onClick={() => {
            state.wall2TextureIndex = 0;
            resetMenu();
          }}>
            <div style={{width: 100, height: 100, background: "#ffffff"}}/>
          </div>
          <div onClick={() => {
            state.wall2TextureIndex = 1
            resetMenu();
          }}>
            <img src={"/curtain/leather-black/black-leather_albedo.png"} width={100} height={100}/>

          </div>
          <div onClick={() => {
            state.wall2TextureIndex = 2;
            resetMenu();
          }}>
            <img src={"/wall/stone/stacked-stone-siding_albedo.png"} width={100} height={100}/>

          </div>
        </div>
      </motion.div>}

      {snap.wall3MenuIsOpen && <motion.div
        key={"wall3"}
        initial={{x: 200}}
        animate={{x: 0}}
        exit={{x: 200}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        onClick={() => {
          resetMenu()
        }}

        className={"wall1-menu"}>
        <div className={"wall1-menu__wrapper"}>
          <h2>Wall 3</h2>
          <div onClick={() => {
            state.wall3TextureIndex = 0;
            resetMenu();
          }}>
            <div style={{width: 100, height: 100, background: "#ffffff"}}/>
          </div>
          <div onClick={() => {
            state.wall3TextureIndex = 1;
            resetMenu();
          }}>
            <img src={"/curtain/leather-black/black-leather_albedo.png"} width={100} height={100}/>

          </div>
          <div onClick={() => {
            state.wall3TextureIndex = 2;
            resetMenu();
          }}>
            <img src={"/wall/stone/stacked-stone-siding_albedo.png"} width={100} height={100}/>

          </div>
        </div>
      </motion.div>}

    </AnimatePresence>
  )
}

function App() {

  return (
    <>
      <Canvas camera={{position: [0, 1, 5]}} style={{overflow: "hidden"}} >
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
