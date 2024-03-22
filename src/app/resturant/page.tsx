"use client";
import { useState } from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignUp from "../_components/resturantSignUp";
import Link from "next/link";

function ResturantPage() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
      <section className="min-h-[90vh]  max-w-[500px] my-5 mx-auto ">
        <div className=" p-5 bg-blue-100 shadow-lg rounded-lg mx-4">
          <h1 className="text-center text-3xl font-bold my-3">
            {login ? "Log in" : "Sign Up"}
          </h1>

          {login ? <ResturantLogin /> : <ResturantSignUp />}
          {login ? (
            <p className="my-2 text-center">
              Do not have an Account ?{" "}
              <Link
                className="duration-200 transition-opacity ease-in-out underline hover:opacity-70  hover:no-underline"
                href="#"
                onClick={() => setLogin((prev) => !prev)}
              >
                {login ? "Create One" : "Login"}
              </Link>
            </p>
          ) : (
            <p className="my-2 text-center">
              Already Have an Account ?{" "}
              <Link
                className="duration-200 transition-opacity ease-in-out underline hover:opacity-70  hover:no-underline"
                href="#"
                onClick={() => setLogin((prev) => !prev)}
              >
                Login
              </Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default ResturantPage;
