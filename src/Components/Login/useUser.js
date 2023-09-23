import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../servers/apiLogin";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

function useUser() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: getCurrentUser,
  });
  return { isLoading, data, error };
}

export default useUser;
