import { useMutation } from "@tanstack/react-query";
import { putOTP } from "../../servers/apiLogin";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userForgetPassword } from "./loginSlice";

function usePutOTP({ handleSetError, email, otp, type, setNewPage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, mutate: applyOTP } = useMutation({
    mutationFn: putOTP,
    onSuccess: (data) => {
      toast.success(data.message);
      if (type === "ProfileToNewOpject") {
        dispatch(userForgetPassword({ email: email, otp: otp }));
      }
      if (type !== "ProfileToNewOpject") {
        dispatch(userForgetPassword({ email: email, otp: otp }));
        navigate("/login/auth");
      }
    },
    onError: (data) => {
      handleSetError(data.message);
      toast.error(data.message);
    },
  });
  return { applyOTP, isLoading };
}

export default usePutOTP;
