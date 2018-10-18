import { GET_NOTES } from "../actionType";

export default function( state={}, action){
    switch (action.type) {
        case GET_NOTES:
            return action.payload;
        default:
            return state;
    }
}