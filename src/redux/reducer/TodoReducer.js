const initialState = {
  List: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      const data = action.payload;
      return {
        ...state,
        List: [
          ...state.List,
          {
            data:data,
          },
        ],
      };

    case "DELETE_DATA": {
      const id = action.payload;
      const newlist = state.List.filter((item, listId) => listId !== id);
      return {
        ...state,
        List: newlist,
      };
    }
    case "EDIT_DATA": {
      const id = action.payload.id;

      const data = action.payload.data;

      const result = state.List.map((value, itemId) => {
        if (itemId === id) {
          return { ...value, data: data };
        }
        return value;
      });
      return { ...state, List: result };
    }
    case "CLEAR_DATA": {
      console.log("clear ok");
      return {
        ...state,
        List: [],
      };
    }
    default:
      return state;
  }
};
