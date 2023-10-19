import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "../../servers/apiLogin";
import { loginUser } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";

function useUser() {
  const dispatch = useDispatch();
  const tokenValue = localStorage.getItem("token");
  const token = useSelector((state) => state?.user?.user?.token);
  console.log("token form useUser", token);
  const { isLoading, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => GetCurrentUser(tokenValue),
  });

  dispatch(loginUser(data?.data));

  return { isLoading, data, error };
}

export default useUser;
