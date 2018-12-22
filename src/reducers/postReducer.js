
//the reducer must return something and can only use its previous state and action
export default(state = [], action)=>{
    switch (action.type) {
        case "FETCH_IMAGES": //certain type of action
            return action.payload; //when this runs, redux tells react to rerender itself
        default:
            return state; //don't want to return undefined - returns what it had before
    }
};