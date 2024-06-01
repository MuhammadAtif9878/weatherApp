const initialState = {
  weatherList: '',
  loading: false,
  
};



const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WEATHER_DATA_SUCCESS":
      const data = action.payload;
        
      return {
        ...state,
        loading: false,
        
        weatherList: {data}
      };
       
    case 'WEATHER_DATA_REQUEST' :
        return{
               
            ...state,
          loading: true,

      }
      case  "WEATHER_DATA_FAIL":
        const message = action.payload 
        
        
        return{
            ...state,
          loading : false,
          weatherList: {message}
          
        }
      
        
    default: return state
    
  }
};
export default weatherReducer