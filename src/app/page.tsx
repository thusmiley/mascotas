"use client";

import React from "react";

import Image from "next/image";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="max-width padding-x padding-y ">
      <Image src="/fetch-logo.png" width={50} height={50} alt="fetch logo" priority />

      <Login />
    </div>
  );
}
