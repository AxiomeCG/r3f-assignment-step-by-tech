import { proxy, useSnapshot } from 'valtio'

export const state = proxy({ movableObject: null, pivotDragged: false })
