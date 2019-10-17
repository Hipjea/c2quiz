import { TCategoriesData } from '../common/types';
import { 
  FETCH_CATEGORIES,
  CHANGE_STEP
} from './types';


const initialState: TCategoriesData = {
  lang: 'en',
  perStep: 1,
  currentStep: 1,
  maxStep: 1,
  categories: [],
  activeCategories: []
};

export function reducer(state = initialState, action: any): TCategoriesData {
  switch (action.type) {
    case FETCH_CATEGORIES:
      localStorage.setItem('c2-categories', JSON.stringify(action.payload));

      return { 
        ...state, 
        categories: action.payload,
        activeCategories: action.payload.slice(0, state.perStep),
        maxStep: action.payload.length
      }
    case CHANGE_STEP:
      const way = action.payload;
      const nextStep: number = way === "up" ? state.currentStep+1 : state.currentStep-1;
      const maxCat: number = nextStep;
      const minCat: number = maxCat-state.perStep;

      return {
        ...state,
        currentStep: nextStep,
        activeCategories: state.categories.slice(minCat, maxCat)
      }
    default:
      return state;
  }
}

export default reducer;