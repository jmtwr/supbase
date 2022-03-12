import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../clients/SupabaseClient";
import { userSelector } from "../store/selectors/userSelector";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/ui/Input";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
  })
  .required();

export const SignIn = () => {
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  console.log("err", getValues());
  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    console.log("val", { email, password });
  };

  useEffect(() => {
    user && navigate("/");
  }, [user, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content min-w-[320px] flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <Input
              error={errors.email?.message}
              {...register("email")}
              placeholder="email"
              label="Email"
            />
            <Input
              error={errors.password?.message}
              {...register("password")}
              placeholder="password"
              label="Password"
            />
            <div className="form-control">
              <label className="label">
                <Link className="label-text-alt link link-hover" to="/sign-up">
                  Sign up
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
