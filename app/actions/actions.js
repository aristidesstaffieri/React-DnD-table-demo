
import * as types from '../constants/constants'

export const dragRight1 = (col) => {
	return { type: types.DRAG_RIGHT1, col }
}

export const dragLeft1 = (col) => {
	return { type: types.DRAG_LEFT1, col }
}

export const dragRight2 = (col) => {
	return { type: types.DRAG_RIGHT2, col }
}

export const dragLeft2 = (col) => {
	return { type: types.DRAG_LEFT2, col }
}
