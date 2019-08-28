import { TAnswersData } from '../common/types';
import { 
  ADD_ANSWER,
  GET_ANSWERS
} from './types';


const initialState: TAnswersData = {
  filter: null,
  answers: []
};

function insertItem(array: any, action: any) {
  let newArray = array.slice();
  return newArray.concat(action.payload);
}

function removeItem(array: any, action: any) {
  return array.filter((item: any) => item.statement !== action.payload.statement);
}

export function reducer(state = initialState, action: any): TAnswersData {
  switch (action.type) {
    case ADD_ANSWER:
      let newAnswers: any = state.answers;
      newAnswers = removeItem(newAnswers, action);
      newAnswers = insertItem(newAnswers, action);
  
      return { 
        ...state, 
        answers: newAnswers
      };
    case GET_ANSWERS:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default reducer;