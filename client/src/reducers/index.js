const DEFAULT_STATE = {
  authenticated: false,
  artist: null,
  tracks: []
};


const rootReducer = (state = DEFAULT_STATE, action) => { 
  switch(action.type) {
    case 'AUTHENTICATE':
      return {...state,authenticated: true};
    default:
      return state;
  }
}


export default rootReducer;