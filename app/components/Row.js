import React, { Component as C} from 'react'
import ReactDOM from 'react-dom'

class Row extends C {
	constructor(props) {
		super(props)
	}

	render() {
		const { row } = this.props
		return (
			<td>{row.name}</td>
		)
	}
}

export default Row
