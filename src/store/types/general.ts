import { Action } from 'redux';

export enum SyncStatus {
	'SYNCING' = 'SYNCING',
	'SYNCED' = 'SYNCED',
	'NOT_SYNCED' = 'NOT_SYNCED',
}

export type GeneralDataState = {
	syncStatus: SyncStatus;
	lastSyncTime?: Date;
};

export const SET_SYNC_STATUS = 'SET_SYNC_STATUS';
export const SET_LAST_SYNC_TIME = 'SET_LAST_SYNC_TIME';

export interface ISetSyncState extends Action<typeof SET_SYNC_STATUS> {
	type: typeof SET_SYNC_STATUS;
	payload: SyncStatus;
}

export interface ISetLastSyncTime extends Action<typeof SET_LAST_SYNC_TIME> {
	type: typeof SET_LAST_SYNC_TIME;
	payload: Date;
}

export type GeneralActions = ISetLastSyncTime | ISetSyncState;
