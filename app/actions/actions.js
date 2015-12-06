import * as types from '../constants/constants'

export const drag = (draggedCol, targetCol) => {
	return { type: types.DRAG, draggedCol, targetCol }
}
