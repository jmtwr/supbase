import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { userSelector } from "../store/selectors/userSelector";

export const GuardedRoute: React.FC = ({ children }) => {
  const user = useSelector(userSelector);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }
  return <>{children}</>;
};
