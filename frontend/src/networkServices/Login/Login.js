import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  setLoading,
  setToken,
} from "../../store/reducer/Slice/AuthSlice/authSlice";
import { apiConnector } from "../apiconnector";
import { endpoints, userData } from "../apis";
const dispatch = useDispatch();

const login = endpoints.LOGIN;
const userType = userData.USER_TYPE;

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", login, {
        email,
        password,
      });
      if (response?.data?.success) {
        toast.success("Login successfull");
        dispatch(setToken(response?.data?.token));
        navigate("/dashboard");
      }
    } catch (e) {}
  };
}

export const user_type = async () => {
  try {
    const response = await apiConnector("GET", userType, {});
    return response;
  } catch (e) {}
};
