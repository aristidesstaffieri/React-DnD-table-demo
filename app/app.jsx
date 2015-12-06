import './index.html'
import 'babel-core/polyfill'
import 'normalize.css/normalize.css'
import './scss/app.scss'
import Table from './containers/Table'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { devTools, persistState } from 'redux-devtools'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import reducer from './reducers/reducers'


import React, { Component as C } from 'react'
import ReactDOM from 'react-dom'

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)


let store = finalCreateStore(reducer)

class App extends C {
  render() {
    return (
      <div>
				<Provider store={store}>
					<Table />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}
                    visibleOnLoad={true} />
        </DebugPanel>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
