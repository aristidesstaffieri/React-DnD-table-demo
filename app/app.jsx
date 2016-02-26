import './index.html'
import 'babel-polyfill'
import 'normalize.css/normalize.css'
import './scss/app.scss'
import Table from './containers/Table'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { persistState, createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import reducer from './reducers/reducers'

import React from 'react'
import ReactDOM from 'react-dom'

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)


let store = finalCreateStore(reducer)

const App = () => (
	<div>
		<Provider store={store}>
      <div>
        <Table />
        <DevTools />
      </div>
		</Provider>
	</div>
)

ReactDOM.render(<App />, document.getElementById('app'))
