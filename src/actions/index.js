import jsonPlaceholder from '../apis/jsonPlaceholder';

//can only use async bc of redux thunk

//Action creator - person dropping off the form
export const fetchImages = (props) => async dispatch => {//can do async now bc of thunk
        const response = await jsonPlaceholder.get('/search/photos?page=1&query=' + props); //default value for now
      
        dispatch({ type: 'FETCH_IMAGES', payload: response.data.results }); //get specific data creating a form
};

export const addFavorite = (image) => {
        console.log(image);
        return {
                type: 'IMAGE_SELECTED',
                payload: image
        };
}
 
export const removeFavorite = (image) => {
        console.log(image);
        return {
                type: 'IMAGE_DESELECTED',
                payload: image
        };
}
 

