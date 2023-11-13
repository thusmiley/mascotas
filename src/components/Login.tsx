"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";

type FormInputs = {
  name: string;
  email: string;
};

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => {
        window.location.replace("/search");
      })
      .catch((err) => {
        setErr(!err);
      });
  };

  return (
    <div className="sm:max-w-[377px] mx-auto">
      <h1 className="text-[24px] font-bold mt-20 mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="form-input mb-8">
          <label>Name</label>
          <input type="text" {...register("name", { required: true, minLength: { value: 3, message: "Enter at least 3 characters" } })} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
        </div>

        <div className="form-input mb-12">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Required", pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email" } })}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        {err && (
          <p className="text-red-500 text-[15px] right-0 bottom-[-23px] mb-8 bg-red-200 px-4 py-3 rounded-[5px]">
            Your name or email is incorrect or this account doesn't exist. Please try again.
          </p>
        )}

        <input type="submit" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default Login;
