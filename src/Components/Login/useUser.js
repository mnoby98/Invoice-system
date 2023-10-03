import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "../../servers/apiLogin";
import { useEffect, useState } from "react";
import { loginUser } from "./loginSlice";
import { useDispatch } from "react-redux";

function useUser() {
  const dispatch = useDispatch();
  // const tokenValue = localStorage.getItem("token");
  const { isLoading, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: GetCurrentUser,
  });

  dispatch(loginUser(data?.data));

  return { isLoading, data, error };
}

export default useUser;
