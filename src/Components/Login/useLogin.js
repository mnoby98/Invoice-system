import { useMutation } from "@tanstack/react-query";
import loginApi from "../../servers/apiLogin";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getToken, loginUser } from "./loginSlice";
import { useNavigate } from "react-router-dom";

function useLogin({ handleError }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading: isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      toast.success(response.message);
      localStorage.setItem("token", response.data.token);
      dispatch(loginUser(response.data));
      navigate("/invoice");
    },
    onError: (errorFormApi) => {
      toast.error(errorFormApi.message);
      handleError(errorFormApi);
    },
  });
  return { isLoading, login };
}

export default useLogin;
