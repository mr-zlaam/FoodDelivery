"use client";
import { useState } from "react";
import ResturantLogin from "../_components/authentication/resturantLogin";
import ResturantSignUp from "../_components/authentication/resturantSignUp";
import Link from "next/link";
import RestaurantHeader from "../_components/headers/RestaurantHeader";
import RestaurantFooter from "../_components/footer/RestaurantFooter";

function ResturantPage() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
      <RestaurantHeader />
      <section className="max-w-[500px] my-5 mx-auto ">
        <div
          className={` p-5 bg-white/90 border-black  shadow-lg shadow-black/30 rounded-xl mx-4 ${
            login && "relative top-28"
          }`}
        >
          <h1 className="text-center text-3xl font-bold my-3">
            {login ? "Log in" : "Sign Up"}
          </h1>

          {login ? <ResturantLogin /> : <ResturantSignUp />}
          {login ? (
            <p className="my-2 text-center">
              Do not have an Account ?{" "}
              <Link
                className="duration-200 text-blue-700 transition-opacity ease-in-out underline hover:opacity-80  hover:no-underline"
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
                className="duration-200 text-blue-700 transition-opacity ease-in-out underline hover:opacity-80  hover:no-underline"
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
