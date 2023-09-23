import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changePassword } from "../../servers/apiLogin";
import { useDispatch } from "react-redux";
import { userForgetPassword } from "./loginSlice";
import { useNavigate } from "react-router-dom";
function useNewPassword({
  handleError,
  email,
  otp,
  password,
  confirmPassword,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, mutate: newPassword } = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      dispatch(userForgetPassword({ email, otp, password, confirmPassword }));
      toast.success("success changing password");
      navigate("/login");
    },
    onError: (data) => {
      handleError(data.message);
      toast.error("something went wrong in new password");
    },
  });
  return { isLoading, newPassword };
}

export default useNewPassword;
