import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import Column from '../components/Column'
import Row from '../components/Row'
import * as DragActions from '../actions/actions'

const Table = ({ table, actions }) => (
	<table>
		<thead>
			<tr>
				{ table.headings.map((column) => <Column key={column.name} column={column} drag={actions.drag} />) }
			</tr>
		</thead>
		<tbody>
			<tr>
				{
					table.rows.map((row) => <Row key={row.name} row={row} />)
				}
			</tr>
		</tbody>
	</table>
)

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
)(DragDropContext(HTML5Backend)(Table))
