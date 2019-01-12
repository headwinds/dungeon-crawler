import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducers from './reducers';
import DungeonCrawler from './containers/DungeonCrawler';
//import * as serviceWorker from './serviceWorker';

require('./styles/main.sass'); // root stylesheeet - .css, .scss or .sass

// credit https://gist.github.com/smashercosmo/6dc9c26ce1e2e3dafde5
const actionTransformer = action => {
  if (action.type === 'BATCHING_REDUCER.BATCH') {
    action.payload.type = action.payload.reduce((result, next) => {
      const prefix = result ? result + ' => ' : '';
      return prefix + next.type;
    }, '');

    return action.payload;
  }

  return action;
};

const loggerMiddleware = createLogger({actionTransformer});

const createStoreWithMiddleware = applyMiddleware(thunk, loggerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(enableBatching(reducers))}>
    <DungeonCrawler/>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
