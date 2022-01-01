import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
} from "../constants/productConstants.js";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { isLoading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { isLoading: false, products: action.payload };

    case PRODUCT_LIST_FAILURE:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: { review:[]} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { isLoading: true, product: { review:[]} };

    case PRODUCT_DETAIL_SUCCESS:
      return { isLoading: false, product: action.payload };

    case PRODUCT_DETAIL_FAILURE:
      return { isLoading: false, error: action.payload };

    default:
      return state;
  }
};
