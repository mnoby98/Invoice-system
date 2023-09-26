import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../servers/apiLogin";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userForgetPassword } from "./loginSlice";

function useAuthRequest({ handleSetError, userdata }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, mutate: sendingOtp } = useMutation({
    mutationFn: getOtp,
    onSuccess: (successFromApi) => {
      toast.success(successFromApi.message);
      if (userdata.type !== "resend") {
        navigate("/login/addotp");
        dispatch(userForgetPassword({ email: userdata.email }));
      }
      console.log("userdata", userdata);
    },
    onError: (errorFormApi) => {
      handleSetError(errorFormApi);
      toast.error(errorFormApi.message);
    },
  });

  return { isLoading, sendingOtp };
}

export default useAuthRequest;
