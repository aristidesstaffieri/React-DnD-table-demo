import React, { Component as C} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Column from '../components/Column'
import Row from '../components/Row'
import * as DragActions from '../actions/actions'

/*

<th>5</th>
<th>15</th>
<th>30</th>

*/

class Table extends C {
	constructor(props) {
		super(props)
	}

	render() {
		const { table, actions } = this.props
		console.log(this.props)
		return (
			<table>
				<thead>
					<tr>
						{ table.headings.map((column) => <Column key={column.colNumber} column={column} />) }
					</tr>
				</thead>
				<tbody>
					<tr>
						{
							table.rows.map((row) => <Row key={row.colNumber} row={row} />)
						}
					</tr>
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state) {
  return {
    table: state.table
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DragActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
