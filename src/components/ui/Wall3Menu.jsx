import {motion} from 'framer-motion';
import {resetMenu, state} from '../../store.js';
import React from 'react';

export const Wall3Menu = () => <motion.div
  key={'wall3'}
  initial={{x: 200}}
  animate={{x: 0}}
  exit={{x: 200}}
  transition={{duration: 0.3, ease: 'easeInOut'}}
  onClick={() => {
    resetMenu()
  }}

  className={'wall1-menu'}>
  <div className={'wall1-menu__wrapper'}>
    <h2>Wall 3</h2>
    <div onClick={() => {
      state.wall3TextureIndex = 0;
      resetMenu();
    }}>
      <div style={{width: 100, height: 100, background: '#ffffff'}}/>
    </div>
    <div onClick={() => {
      state.wall3TextureIndex = 1;
      resetMenu();
    }}>
      <img src={'/curtain/leather-black/black-leather_albedo.png'} width={100} height={100}/>

    </div>
    <div onClick={() => {
      state.wall3TextureIndex = 2;
      resetMenu();
    }}>
      <img src={'/wall/stone/stacked-stone-siding_albedo.png'} width={100} height={100}/>

    </div>
  </div>
</motion.div>;
