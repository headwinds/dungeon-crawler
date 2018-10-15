require('./styles/main.sass'); // root stylesheeet - .css, .scss or .sass

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

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
import reducers from './reducers';

import App from './containers/app';

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(enableBatching(reducers))}>
		<App/>
	</Provider>
	, document.querySelector('.container'));
