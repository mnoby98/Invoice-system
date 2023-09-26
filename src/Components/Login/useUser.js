import { useQuery } from "@tanstack/react-query";
import { GetCurrentUser } from "../../servers/apiLogin";
import { useEffect, useState } from "react";

function useUser() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: GetCurrentUser,
  });
  console.log("dataaaaaa from useUser", data?.data);
  const token = data;
  return { isLoading, data, error, token };
}

export default useUser;
