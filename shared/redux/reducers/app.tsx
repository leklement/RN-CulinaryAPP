import { IAction } from '../types/IAction';
import { ACTION_TYPES } from '../constants/actionTypes';
import { ApplicationState } from '../types/stores/app';

const initialState = {
  isLoading: true,
  creations: {}
};

function getCurrentCreation(key: string, state: ApplicationState) {
  return state.creations &&  state.creations[key] ? state.creations[key] : {visits: 0}
}

export default (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ACTION_TYPES.SPLASH.SPLASH_LAUNCHED:
      return {
        ...state,
        isLoading: false,
      };

    case ACTION_TYPES.CREATION.ADD_VISIT:
      const key = action.data!
      const currentCreation = getCurrentCreation(key, state);
      
      return {
        ...state,
        creations: {
          ...state.creations,
          [key]: {
            visits: currentCreation.visits + 1
          }
        }
      }

    default:
      return state;
  }
};
