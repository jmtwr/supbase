import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../clients/SupabaseClient";
import { userSelector } from "../store/selectors/userSelector";
import { setUser } from "../store/userStore";

export const Auth: React.FC = ({ children }) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const supaUser = supabase.auth.user();
    dispatch(setUser(supaUser));
  }, [user, dispatch, navigate]);

  return <>{children}</>;
};
