import {
	IGlobalState,
	IResetGlobalState,
	ISetGlobalState,
	RESET_GLOBAL_STATE,
	SET_GLOBAL_STATE,
	ThunkResult,
} from '../types';

export const overrideGlobalState = (
	payload: Partial<IGlobalState>,
): ThunkResult<ISetGlobalState> => (dispatch) => {
	dispatch({ type: SET_GLOBAL_STATE, payload });
};

export const resetGlobalState = (): ThunkResult<IResetGlobalState> => (
	dispatch,
) => {
	dispatch({ type: RESET_GLOBAL_STATE });
};
