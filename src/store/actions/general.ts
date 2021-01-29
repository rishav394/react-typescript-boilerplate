import { ThunkResult } from '../types';
import {
	ISetLastSyncTime,
	ISetSyncState,
	SET_LAST_SYNC_TIME,
	SET_SYNC_STATUS,
	SyncStatus,
} from '../types/general';

export const setSyncStatus = (
	payload: SyncStatus,
): ThunkResult<ISetSyncState> => (dispatch) => {
	dispatch({ type: SET_SYNC_STATUS, payload });
};

export const setLastSyncTime = (
	payload: Date,
): ThunkResult<ISetLastSyncTime> => (dispatch) => {
	dispatch({ type: SET_LAST_SYNC_TIME, payload });
};
