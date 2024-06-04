import {useSnapshot} from 'valtio';
import {state} from '../../store.js';
import {useThree} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Vector3} from 'three';
import React from 'react';

export const CameraControls = () => {
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
