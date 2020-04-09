import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: [],
  remoteArticles: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      }
    case "REMOVE_ARTICLE":
      return {
        ...state,
        articles: state.articles.filter(item => item.title !== action.payload.title)
      }
    case "DATA_LOADED":
      return {
        ...state,
        remoteArticles: action.payload.Search
      };
    case "MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: {...action.payload}
      };
    default:
      return state
  }
}

export default rootReducer;
