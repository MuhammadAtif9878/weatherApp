const initialState = {
  userList: [],
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      const List = action.payload;

      return {
        ...state,
        loading: false,
        userList:{List}
      };


    case "GET_USERS_FAIL":
        const message = action.payload
      return {
        ...state,
        loading: false,
        userList:message
      };
      case "USER_ACTION_REQUEST":
        return {
          ...state,
          loading: true,
        };
    default:
      return state;
  }
};
