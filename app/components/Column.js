import React, { Component as C} from 'react'
import ReactDOM from 'react-dom'

class Column extends C {
	constructor(props) {
		super(props)
	}

	render() {
		const { column } = this.props
		return (
			<th>
				{column.name}
			</th>
		)
	}
}

export default Column
