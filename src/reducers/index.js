import { combineReducers } from 'redux'; //combine all the reducers together
import postsReducer from './postReducer';
import favoritesReducer from './favoritesReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    images: postsReducer,
    favorites:favoritesReducer,
    form:formReducer
});

