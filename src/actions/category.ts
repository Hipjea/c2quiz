/**
 * Fetch a JSON file from public directory.
 * @param {string} lang The JSON file lang.
 * @returns {Array} The JSON data structure.
 */
export const fetchCategories = (lang: string) => async (dispatch: any) => {
    try { 
        const response = await fetch(`datasource/${lang}/statements.json`)
            .then(r => r.json())
            .then(json => {
                return json;
            });
        
        return dispatch({ type: 'FETCH_CATEGORIES', payload: response });
    } catch(error) {
        throw new Error(error);
    }
};

/**
 * Change the step of the survey.
 * @param {string} way up or down.
 * @returns {Array} The JSON data structure.
 */
export const changeStep = (way: string) => async (dispatch: any) => {
    return dispatch({ type: 'CHANGE_STEP', payload: way });
};