import { combineReducers } from 'redux';
import { GlobalActions, IGlobalState, RESET_GLOBAL_STATE } from '../types';
import generalDataReducer from './general';

const rootReducer = (
	state: IGlobalState | undefined,
	action: GlobalActions,
) => {
	switch (action.type) {
		case RESET_GLOBAL_STATE: {
			return baseReducer(undefined, action);
		}
		default: {
			return baseReducer(state, action);
		}
	}
};

export default rootReducer;

const baseReducer = combineReducers<IGlobalState>({
	generalData: generalDataReducer,
});
