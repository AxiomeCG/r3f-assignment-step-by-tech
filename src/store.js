import { proxy, useSnapshot } from 'valtio'

export const state = proxy({ movableObject: null, pivotDragged: false, curtainTextureIndex: 0, curtainMenuIsOpen: false})
