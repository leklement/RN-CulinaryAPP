/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { ApplicationState } from '../types/stores/app';
import { ACTION_TYPES } from '../constants/actionTypes';

export const splashLaunched = (): IAction<ApplicationState> => ({
  type: ACTION_TYPES.HOME.HOME_LAUNCHED,
});

export const addVisit = (data: any): IAction<ApplicationState> => ({
  type: ACTION_TYPES.CREATION.ADD_VISIT,
  data
});
