import axios from "axios";

export const createData = (data) => {
  return {
    type: "ADD_DATA",
    payload: data,
  };
};

export const editTodo = (id, data) => {
  return {
    type: "EDIT_DATA",
    payload: {
      id: id,
      data: data,
    },
  };
};
export const deleteData = (payload) => {
  return { type: "DELETE_DATA", payload };
};

export const clearTodo = () => {
  return {
    type: "CLEAR_DATA",
  };
};

export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_ACTION_REQUEST" });

    const response = await axios.get("https://dummyjson.com/users");

    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: response.data.users,
    });
  } catch (error) {
    dispatch({
      type: "GET_USERS_FAIL",
      payload: error.message,
    });
  }
};





export const WeatherAction = (city) => async (dispatch) => {
 

  try {
    dispatch({ type: "WEATHER_DATA_REQUEST" });
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=222b3fc073319cc8c9fb0772c770aa78`
    );
   

    dispatch({
      type : "WEATHER_DATA_SUCCESS",
      payload : response.data

    });
      
  } catch (error) {
    dispatch({
      type : "WEATHER_DATA_FAIL",
      payload : error.response.data.message,
    });
  }
};
