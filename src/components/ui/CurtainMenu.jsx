import {motion} from 'framer-motion';
import {resetMenu, state} from '../../store.js';
import React from 'react';

export const CurtainMenu = () => <motion.div
  key={'curtain'}
  initial={{x: 200}}
  animate={{x: 0}}
  exit={{x: 200}}
  transition={{duration: 0.3, ease: 'easeInOut'}}
  onClick={() => {
    resetMenu()
  }}
  className={'curtain-menu'}>
  <div className={'curtain-menu__wrapper'}>
    <h2>Curtains</h2>
    <div onClick={() => {
      state.curtainTextureIndex = 0
      resetMenu();
    }}>
      <img src={'/curtain/leather/leather_white_diff_1k.jpg'} width={100} height={100}/>
    </div>
    <div onClick={() => {
      state.curtainTextureIndex = 1
      resetMenu();
    }}>
      <img src={'/curtain/leather-black/black-leather_albedo.png'} width={100} height={100}/>

    </div>

    <div onClick={() => {
      state.curtainTextureIndex = 2
      resetMenu();
    }}>
      <img src={'/curtain/coarse/coarse-loose-fabric_albedo.png'} width={100} height={100}/>

    </div>
  </div>
</motion.div>;
