import { axiosPrivate as axios } from "../API/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.post("/clients/refreshToken", {
        withCredentials: true,
      });
      setAuth((prev) => {
        console.log("refresh");
        return {
          ...prev,
          clientId: response.data.clientId,
          accessToken: response.data.accessToken,
        };
      });
      return response.data.accessToken;
    } catch (err) {
      setAuth({});
    }
  };
  return refresh;
};

export default useRefreshToken;
