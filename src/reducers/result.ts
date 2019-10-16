import { TResultsData } from '../common/types';
import { 
  PARSE_RESULTS
} from './types';


const initialState: TResultsData = {
  results: []
};

function parseResults(data: any) {
  const answers = data.answers;
  const categories = data.categories;
  let results: any = [];

  categories.forEach(category => {
    let result = { category: { name: category.name, subcategories: [{}] } };

    category.children.forEach((subcategory: any) => {    
      let total = 0;

      subcategory.statements.forEach((stmt: any) => {
        const answer = answers.filter(a => a.statement === stmt.id);
        if (answer[0] && answer[0].answer > 0) {
          total = total + answer[0].answer;
        }
      });
      result.category.subcategories.push({ name: subcategory.name, score: total });
    });

    results.push(result);
  });

  return results;
}

export function reducer(state = initialState, action: any): TResultsData {
  switch (action.type) {
    case PARSE_RESULTS:
      const results = parseResults(action.payload);
      return {
        ...state,
        results: results
      }
    default:
      return state;
  }
}

export default reducer;