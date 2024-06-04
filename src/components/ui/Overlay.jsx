import {useSnapshot} from 'valtio';
import {state} from '../../store.js';
import {AnimatePresence} from 'framer-motion';
import React from 'react';
import {CurtainMenu} from './CurtainMenu.jsx';
import {Wall1Menu} from './Wall1Menu.jsx';
import {Wall2Menu} from './Wall2Menu.jsx';
import {Wall3Menu} from './Wall3Menu.jsx';


export const Overlay = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.curtainMenuIsOpen && <CurtainMenu/>}
      {snap.wall1MenuIsOpen && <Wall1Menu/>}
      {snap.wall2MenuIsOpen && <Wall2Menu/>}
      {snap.wall3MenuIsOpen && <Wall3Menu/>}
    </AnimatePresence>
  )
};
