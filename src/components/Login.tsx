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

  // async function loginUser(credentials) {
  //   return fetch("https://frontend-take-home-service.fetch.com/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(credentials),
  //   }).then((data) => data.json());
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };


  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     name,
  //     email,
  //   });
  //   setToken(token);
  // };

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
        <input type="submit" className="cursor-pointer" />
      </form>
    </div>
  );
};

export default Login;