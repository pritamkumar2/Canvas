const filterReducer = (state, action) => {
  console.log("reducer", action?.payload);
  switch (action?.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: action?.payload,
          all_products: action?.payload,
        };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sortingValue: action?.payload,
      };

      case "SEARCH_PRODUCTS":
        return {
          ...state,
          filter_products: action.payload,
        };

      case "SET_CATEGORIES_FILTER":
        const category = action?.payload;
        const filteredProducts = state?.filter_products.filter(
          (product) => product?.category.toLowerCase() === category.toLowerCase()
        );
        return {
          ...state,
          filter_products: filteredProducts,
        };
      case "SORTING_PRODUCTS":
        const sortingFunctions = {
          "Price: Low to High": (a, b) => a?.price?.discount - b?.price?.discount,
          "Price: High to Low": (a, b) => b?.price?.discount - a?.price?.discount,
          Newest: (a, b) => a.date - b.date,
          "Best Rating": (a, b) => b?.rating - a?.rating,
          "Most Popular": (a, b) => {
            const popularityA = a?.comments?.length * a?.rating;
            const popularityB = b?.comments?.length * b?.rating;
            return popularityB - popularityA;
          },
        };

        const sortingFunction = sortingFunctions[state?.sortingValue];
        if (sortingFunction) {
          const tempSortProduct = [...state?.filter_products];
          const sortedProducts = tempSortProduct.sort(sortingFunction);
          return {
            ...state,
            filter_products: sortedProducts,
          };
        }
        return state;

    default:
      return state;
  }
};

export default filterReducer;
