import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../store/selectors/userSelector";

export const Main = () => {
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/sign-in");
  }, [user, navigate]);

  return <div>main</div>;
};
