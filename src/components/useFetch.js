import { useReducer } from "react";

const initialState = {
  loading: false,
  error: null,
  response: null
};

const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...initialState,
      loading: true
    };
  }

  if (action.type === "ERROR") {
    return {
      ...initialState,
      error: action.error
    };
  }

  if (action.type === "RESPONSE") {
    return {
      ...initialState,
      response: action.response
    };
  }

  return state;
};

const useFetch = (url, options = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sendRequest = () => {
    dispatch({ type: "LOADING" });

    // See: https://developer.mozilla.org/en-US/docs/Web/API/Request
    const request = new Request(url, options);

    fetch(request)
      .then(resp => resp.json())
      .then(resp => {
        if (resp.status === "success") {
          dispatch({ type: "RESPONSE", response: resp });
        } else {
          dispatch({ type: "ERROR", error: resp });
        }
      })
      .catch(error => {
        dispatch({ type: "ERROR", error });
      });
  };

  const { response, loading, error } = state;

  return {
    sendRequest,
    response,
    loading,
    error
  };
};

export default useFetch;
