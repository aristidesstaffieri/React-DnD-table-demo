import { DRAG_RIGHT1, DRAG_LEFT1, DRAG_RIGHT2, DRAG_LEFT2 } from '../actions/actions'

const initialState = {
	table: {
		headings: [
			{
				name: 'Column 1',
				colNumber: 1
			},
			{
				name: 'Column 2',
				colNumber: 2
			},
			{
				name: 'Column 3',
				colNumber: 3
			}
		],
		rows: [
			{
				name: '15',
				colNumber: 1
			},
			{
				name: '25',
				colNumber: 2
			},
			{
				name: '35',
				colNumber: 3
			}
		]
	}
}

export default function drag(state = initialState, action) {
	switch (action.type) {
		case DRAG_RIGHT1:
			return [...state.splice(action.colNumber, 1)]
		case DRAG_LEFT1:
			return [...state.splice(action.colNumber, 1)]
		case DRAG_RIGHT2:
			return [...state.splice(action.colNumber, 2)]
		case DRAG_LEFT2:
			return [...state.splice(action.colNumber, 2)]
		default:
			return state
	}
}
