import * as types from '../constants/constants'

const initialState = {
	table: {
		headings: [
			{
				name: 'Column 1'
			},
			{
				name: 'Column 2'
			},
			{
				name: 'Column 3'
			}
		],
		rows: [
			{
				name: '15',
				column: 'Column 1'
			},
			{
				name: '25',
				column: 'Column 2'
			},
			{
				name: '35',
				column: 'Column 3'
			}
		]
	}
}

export default function drag(state = initialState, action) {
	switch (action.type) {
		case types.DRAG:
			return reOrderCols(state, action.draggedCol, action.targetCol)
		default:
			return state
	}
}

const reOrderCols = (state, draggedCol, targetCol) => {
	let colOrder = state.table.headings.map((heading) => heading.name)
	let columns = state.table.headings.slice()
	let draggedColIndex = colOrder.indexOf(draggedCol.name)
	let targetColIndex = colOrder.indexOf(targetCol.name)

	columns.splice(draggedColIndex, 1)
	columns.splice(targetColIndex, 0, draggedCol)

	let rowOrder = columns.map((col) => {
		return state.table.rows.filter((row) => {
			if (col.name === row.column) return row
		})[0]
	})
	let newState = {
		table: {
			headings: columns,
			rows: rowOrder
		}
	}
	return newState
}
