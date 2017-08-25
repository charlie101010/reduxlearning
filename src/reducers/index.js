import {
	ADD_NUMBER
} from '../actions/index'


const initialState = 1


const counter = (state = initialState, action) => {
	switch (action.type) {
    case ADD_NUMBER:
      return 
       	state + 1;
    default:
    	return state;
        
      }
}


export default counter