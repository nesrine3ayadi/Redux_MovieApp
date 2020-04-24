import { MoviesData } from "../Constant/Data";
const initialState = {
  moviesList: MoviesData,
  keyWord: "",
  rate: 1,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,moviesList: [...state.moviesList,  action.payload ],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,moviesList: state.moviesList.filter(
          (element) => element.id !== action.payload
        ),
      };

    case "EDIT_MOVIE":
      return {
        ...state,moviesList: state.moviesList.map((element) =>
          element.id === action.payload
            ? { ...element, edit: !element.edit }
            : element
        ),
      };

    case "SAVE_MOVIE":
      return {
        ...state,moviesList: state.moviesList.map((element) =>
          element.id === action.payload.id
            ? {
                ...element,
                movieName: action.payload.movieName,
                rating: action.payload.rating,
                edit: !element.edit,
              }
            : element
        ),
      };

    case "SEARCH_MOVIE_BY_NAME":
      return {
        ...state,
        keyWord: action.payload,
      };

    case "SEARCH_MOVIE_BY_RATE":
      return {
        ...state,
        rate: action.payload,
      };
    default:
      return state;
  }
}
