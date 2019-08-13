const DEFAULT_STATE = {
  authenticated: false
};


const rootReducer = (state = DEFAULT_STATE, action) => { 
  switch(action.type) {
    case 'AUTHENTICATE':
      return {authenticated: true};
    default:
      return state;
  }
}


export default rootReducer;