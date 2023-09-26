import { useNavigate } from "react-router-dom";
import useUser from "../Components/Login/useUser";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoading, data, error } = useUser();

  //3. If there is no authenticated user , redirect to the /login
  const token = localStorage.getItem("token");
  console.log("daaaaaaaa", data?.data?.token);
  const datatoken = data?.data?.token === undefined;

  useEffect(
    function () {
      if (!datatoken && !isLoading) navigate("/login");
    },
    [isLoading, navigate, datatoken],
  );

  //2. While loading ,show a spinner
  // if (isLoading) return <Spinner />;

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
