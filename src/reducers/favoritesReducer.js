
//the reducer must return something and can only use its previous state and action
export default(state = [], action)=>{
    switch (action.type) {
        case "IMAGE_SELECTED": //certain type of action
            return [...state, action.payload]; //when this runs, redux tells react to rerender itself
        case "IMAGE_DESELECTED":
            return state.filter(element => element !== action.payload)
        default:
            return state; //don't want to return undefined - returns what it had before
    }
};