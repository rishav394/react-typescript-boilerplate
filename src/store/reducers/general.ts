import { Reducer } from 'redux';
import { GlobalActions, RESET_GLOBAL_STATE, SET_GLOBAL_STATE } from '../types';
import {
	GeneralActions,
	GeneralDataState,
	SET_LAST_SYNC_TIME,
	SET_SYNC_STATUS,
	SyncStatus,
} from '../types/general';

const defaultState: GeneralDataState = {
	syncStatus: SyncStatus.NOT_SYNCED,
};

const generalDataReducer: Reducer<
	GeneralDataState,
	GeneralActions | GlobalActions
> = (state = defaultState, action) => {
	switch (action.type) {
		case SET_LAST_SYNC_TIME: {
			return {
				...state,
				lastSyncTime: action.payload,
			};
		}
		case SET_SYNC_STATUS: {
			return {
				...state,
				syncStatus: action.payload,
			};
		}
		// Exception here
		case RESET_GLOBAL_STATE: {
			return {
				syncStatus: SyncStatus.SYNCING,
			};
		}
		case SET_GLOBAL_STATE: {
			return {
				...state,
				...action.payload.generalData,
			};
			// or we could do which is better but im afraid
			// return action.payload.generalData || state;
		}
		default:
			return state;
	}
};

export default generalDataReducer;
