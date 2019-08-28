import { TSettingsData } from '../common/types';
import { 
  TOGGLE_SOUND
} from './types';


const initialState: TSettingsData = {
  sound: true
};

export function reducer(state = initialState, action: any): TSettingsData {
  switch (action.type) {
    case TOGGLE_SOUND:
      return { 
        ...state, 
        sound: !state.sound
      };
    default:
      return state;
  }
}

export default reducer;