import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { GeneralDataState } from './general';

export interface IGlobalState {
	generalData: GeneralDataState;
}

export const SET_GLOBAL_STATE = 'SET_GLOBAL_STATE';
export const RESET_GLOBAL_STATE = 'RESET_GLOBAL_STATE';

export interface ISetGlobalState extends Action<typeof SET_GLOBAL_STATE> {
	type: typeof SET_GLOBAL_STATE;
	payload: Partial<IGlobalState>;
}

export interface IResetGlobalState extends Action<typeof RESET_GLOBAL_STATE> {
	type: typeof RESET_GLOBAL_STATE;
}

export type GlobalActions = ISetGlobalState | IResetGlobalState;

export type CustomThunkDispatch = ThunkDispatch<void, void, AnyAction>;
export type ThunkResult<A extends Action> = ThunkAction<void, void, void, A>;
