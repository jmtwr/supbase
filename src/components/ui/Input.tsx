import clsx from "clsx";
import { nanoid } from "nanoid";
import React, { forwardRef, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type?: "text" | "password";
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
} & Omit<UseFormRegisterReturn, "ref">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, label, error, ...props }, ref) => {
    const id = useRef(nanoid()).current;

    return (
      <div className={clsx("form-control", className)}>
        {label && (
          <label htmlFor={id} className="label">
            <span className={clsx("label-text", error && "text-red-500")}>
              {label}
            </span>
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          className={clsx("input input-bordered", error && "border-red-500")}
          {...props}
        />
        <small className="text-red-500">{error}</small>
      </div>
    );
  }
);
