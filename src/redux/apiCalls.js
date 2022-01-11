import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    // console.log(user);
    console.log(res.data.isAdmin);
    if (res.data.isAdmin) {
      localStorage.setItem("Authorization", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("isAdmin", res.data.isAdmin);
      window.location.href = "/";
    }
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    // console.log(res.data["products"]);
    dispatch(getProductSuccess(res.data["products"]));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    // console.log(res.data["products"]);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart({ id, product }));
  try {
    const res = await userRequest.put(`/products/${id}`);
    // console.log(res.data["products"]);
    dispatch(updateProductSuccess(id));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products/", product);
    // console.log(res.data["products"]);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
