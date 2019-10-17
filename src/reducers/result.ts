import { TResultsData } from '../common/types';
import { 
  PARSE_RESULTS,
  LOAD_ANSWERS
} from './types';


const initialState: TResultsData = {
  results: [],
  answers: [],
  categories: []
};

function parseResults(stateAnswers: any, stateCategories: any, data: any) {
  const answers = stateAnswers || data.answers;
  const categories = stateCategories || data.categories;
  let results: any = [];

  categories.forEach(category => {
    let result = { category: { name: category.name, subcategories: [{}] } };

    category.children.forEach((subcategory: any) => {    
      let total = 0;

      subcategory.statements.forEach((stmt: any) => {
        const answer = answers.filter(a => a.statement === stmt.id);
        if (answer[0] && answer[0].answer > 0) {
          total = total + (answer[0].answer - 1);
        }
      });

      result.category.subcategories.push({ 
        name: subcategory.name, 
        count: subcategory.statements.length, 
        total: total,
        score: Math.round((total / (subcategory.statements.length * 3)) * 100)
      });
    });

    results.push(result);
  });

  return results;
}

export function reducer(state = initialState, action: any): TResultsData {
  switch (action.type) {
    case LOAD_ANSWERS:
      return {
        ...state,
        answers: action.payload.answers,
        categories: action.payload.categories,
      }
    case PARSE_RESULTS:
      const results = parseResults(state.answers, state.categories, action.payload);
      
      return {
        ...state,
        results: results
      }
    default:
      return state;
  }
}

export default reducer;