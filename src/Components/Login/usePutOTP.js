import { useMutation } from "@tanstack/react-query";
import { putOTP } from "../../servers/apiLogin";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userForgetPassword } from "./loginSlice";

function usePutOTP({ handleSetError, email, otp }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, mutate: applyOTP } = useMutation({
    mutationFn: putOTP,
    onSuccess: (data) => {
      toast.success(data.message);
      dispatch(userForgetPassword({ email: email, otp: otp }));
      navigate("/login/auth");
    },
    onError: (data) => {
      handleSetError(data.message);
      toast.error(data.message);
    },
  });
  return { applyOTP, isLoading };
}

export default usePutOTP;