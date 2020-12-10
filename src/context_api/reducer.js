export const initialState={
    user: "",
 
   
    
    // token:"BQBY4t5Jm7kZMYcZZ8Ww5j8Pv6IoG3NwjIKrrGACHI9mylqki8NaWNVcMTOJXqQUJz9T3wl9zIy--dXJBaaDEPvUZXmeO-kk4aXFiGsE6ne7pvtgYbngK_BrPB-nDr509-DUnCszEXmynsqhrVlhrjU8DdJRgTb8F3Jak3GPab9nqfgi",
};

export const actionTypes={
  SET_USER:"SET_USER"
}

const reducer = (state, action) => {
   console.log(action);
    switch (action.type) {
      case actionTypes.SET_USER:
        return {
          ...state,
          user: action.user,
        };
      default:
        return state;
    }
  };
  

export default reducer