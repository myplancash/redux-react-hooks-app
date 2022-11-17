const initialState = {
  name: 'Sergio Esteban Torres',
  loggedIn: false
}

export const userReducer = (state=initialState, action) => {
  return state
}


export const getName = state => state.user.name 