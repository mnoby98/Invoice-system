import { useNavigate } from "react-router-dom";
import useUser from "../Components/Login/useUser";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";

function ProtectRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoading, data, error } = useUser();

  //3. If there is no authenticated user , redirect to the /login
  useEffect(
    function () {
      if (!data && !isLoading) navigate("/login");
    },
    [data, navigate, isLoading],
  );

  //2. While loading ,show a spinner
  if (isLoading) return <BeatLoader color="#ffffff" />;

  //4. If there IS a user ,render the app
  if (!error) return children;
}

export default ProtectRoute;
