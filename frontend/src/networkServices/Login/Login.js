import { userData } from "../apis";
import store from "../../store/store";
import makeApiRequest from "../makeApiRequest";
import { setLoading } from "../../store/reducer/Slice/AuthSlice/authSlice";

export const LoginAPI = async () => {
  store.dispatch(setLoading(true));
  try {
    const options = {
      method: "GET",
    };
    const data = await makeApiRequest(`${userData?.USER_TYPE}`, options);
    store.dispatch(setLoading(false));
    return data;
  } catch (error) {
    store.dispatch(setLoading(false));
    console.error("Error Found", error);
  }
};