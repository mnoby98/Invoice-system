import { Route, Router, useNavigate } from "react-router-dom";
import useUser from "../Components/Login/useUser";
import { BeatLoader } from "react-spinners";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoading, data, error } = useUser();
  console.log("data from protectROute", data);
  const tokenFromApi = data?.data?.token;

  console.log("data from protectROute", tokenFromApi);
  //3. If there is no authenticated user , redirect to the /login
  // const tooke = useSelector((state) => state?.user?.user?.token);
  // const token = localStorage.getItem("token");

  useEffect(
    function () {
      if (!tokenFromApi && !isLoading) navigate("/login");
    },
    [tokenFromApi, navigate, isLoading],
  );

  //2. While loading ,show a spinner
  if (isLoading) return <Spinner />;

  //4. If there IS a user ,render the app
  if (!error) return children;
}

function Spinner() {
  return (
    <div className="flex h-[100vh] items-center  justify-center bg-slate-50 ">
      <BeatLoader color="#056ba6 " size={50} />
    </div>
  );
}
export default ProtectRoute;
