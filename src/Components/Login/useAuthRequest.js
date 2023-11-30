import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../servers/apiLogin";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { userForgetPassword } from "./loginSlice";

function useAuthRequest({ handleSetError, userdata, setOtpPage, setNewPage }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, mutate: sendingOtp } = useMutation({
    mutationFn: getOtp,
    onSuccess: (successFromApi) => {
      toast.success(successFromApi.message);
      //Go to profile AddOTP Number
      if (userdata.type === "profileToOtp") {
        dispatch(userForgetPassword({ email: userdata.email }));
        setOtpPage(false);
      }
      //Go to Login AddOTP Number
      if (userdata.type === "loginToOtp") {
        navigate("/login/addotp");
        dispatch(userForgetPassword({ email: userdata.email }));
      }
    },
    onError: (errorFormApi) => {
      handleSetError(errorFormApi);
      toast.error(errorFormApi.message);
    },
  });

  return { isLoading, sendingOtp };
}

export default useAuthRequest;
