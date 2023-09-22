import { axiosUser } from "./api.service";

const loginApi = (payload: ILoginPayload) => {
    return axiosUser.post("/auth/login", payload)
}
const loginGoogleApi = () => {
    return axiosUser.get("/auth/login/google")
}
const loginFacebookApi = () => {
    return axiosUser.get("/auth/login/facebook")
}
const registerApi = (payload: IRegisterPayload) => {
    return axiosUser.post("/auth/register", payload)
}

const logoutApi = async () => {
  const token = localStorage.getItem("token");
  return await axiosUser.post("/auth/logout", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const profileApi = async () => {
  const token = localStorage.getItem("token");
  return await axiosUser.post("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { loginApi, registerApi, loginGoogleApi, loginFacebookApi, logoutApi, profileApi };
