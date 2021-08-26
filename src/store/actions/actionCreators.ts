import * as actionTypes from "./actionTypes"

export function setUserData(user: IUser) {
    const action: UserAction = {
      type: actionTypes.SET_USER_DATA,
      user,
    }
  
    // return simulateHttpRequest(action)
  }