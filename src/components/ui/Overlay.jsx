import {useSnapshot} from 'valtio';
import {resetMenu, state} from '../../store.js';
import {AnimatePresence, motion} from 'framer-motion';
import React from 'react';

export function Overlay() {
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
