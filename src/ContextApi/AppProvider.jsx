import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducers/ProductReducer";

export const AppContext = createContext();

const api = import.meta.env.VITE_BACKENDAPILINK;
const productsApi = `${api}/allProducts`;
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const products = await response.data;

      dispatch({
        type: "SET_API_DATA",
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: "API_ERROR",
        payload: error,
      });
      console.log("Error fetching products:", error.message);
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });

    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;

      dispatch({
        type: "SET_SINGLEPRODUCT_DATA",
        payload: singleProduct,
      });
    } catch (error) {
      console.log("error from appProvider getSingleProduct", error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    fetchData(productsApi);
  }, []);

  return (
    <AppContext.Provider value={{ api, ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AppContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};

export default AppProvider;
