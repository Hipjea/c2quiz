import { TCategoriesData, TAnswersData } from "../common/types";

export const downloadPDF = (categories: TCategoriesData, answers: TAnswersData) => async (dispatch: any) => {
    const url = 'http://localhost:8888/wordpress/wp-content/plugins/c2utils/download.php';

    try {
        await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ 
                    categories: categories,
                    answers: answers
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.blob())
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = "filename.pdf";
                document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
                a.click();    
                a.remove();  //afterwards we remove the element again    
            });
            return dispatch({ type: 'DOWNLOAD_PDF' });
    } catch(error) {
        throw new Error(error);
    }
};