import { Route, Router, useNavigate } from "react-router-dom";
import useUser from "../Components/Login/useUser";
import { BeatLoader } from "react-spinners";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Components/Login/loginSlice";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //1. Load the authenticated user
  const { isLoading, data, error } = useUser();
  dispatch(loginUser(data?.data));

  // console.log("data from protectROute", data);
  // const tokenFromApi = data?.data?.token;

  const token = localStorage.getItem("token");
  useEffect(
    function () {
      if (!token) navigate("/login");
    },
    [token, navigate],
  );

  //2. While loading ,show a spinner
  // if (isLoading) return <Spinner />;

  //4. If there IS a user ,render the app
  return children;
}

function Spinner() {
  return (
    <div className="flex h-[100vh] items-center  justify-center bg-slate-50 ">
      <BeatLoader color="#056ba6 " size={50} />
    </div>
  );
}
export default ProtectRoute;
