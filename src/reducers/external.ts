import { TExternalData } from '../common/types';

const initialState: TExternalData = {};

export function reducer(state = initialState, action: any): TExternalData {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;