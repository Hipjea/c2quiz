import { combineReducers, Reducer } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { TApplicationState } from '../common/types';
import { reducer as settingsReducer } from './settings';
import { reducer as categoryReducer } from './category';
import { reducer as answerReducer } from './answer';
import { reducer as externalReducer } from './external';
import { reducer as resultReducer } from './result';


export const rootReducers: Reducer<TApplicationState> = combineReducers<TApplicationState>({
    settings: settingsReducer,
    category: categoryReducer,
    answer: answerReducer,
    external: externalReducer,
    result: resultReducer
});

export const store = createStore(
    rootReducers, 
    {},
    applyMiddleware(reduxThunk)
);

store.subscribe(() => {});

export default rootReducers;