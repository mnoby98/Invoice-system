import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../servers/apiLogin";

function useUser() {
  console.log("dataaaaaa");
  const { isLoading, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: getCurrentUser,
  });
  console.log("dataaaaaa from useUser", data?.data);
  const token = data;
  return { isLoading, data, error, token };
}

export default useUser;
