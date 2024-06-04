import {proxy} from 'valtio'

export const state = proxy({
  movableObject: null,
  pivotDragged: false,
  isOrbiting: false,
  curtainTextureIndex: 0,
  curtainMenuIsOpen: false,
  wall1MenuIsOpen: false,
  wall2MenuIsOpen: false,
  wall3MenuIsOpen: false,
  wall1TextureIndex: 0,
  wall2TextureIndex: 0,
  wall3TextureIndex: 0,
})


export function resetMenu() {
  state.curtainMenuIsOpen = false;
  state.wall1MenuIsOpen = false;
  state.wall2MenuIsOpen = false;
  state.wall3MenuIsOpen = false;
}
