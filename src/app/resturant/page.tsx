"use client";
import { useState } from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignUp from "../_components/resturantSignUp";
import Link from "next/link";

function ResturantPage() {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
      <section className="min-h-[70vh]  flex flex-col items-center justify-center">
        <div className=" p-5 bg-blue-200">
          <h1 className="text-center text-3xl font-bold my-3">
            {login ? "Log in" : "Create an account"}
          </h1>

          {login ? <ResturantLogin /> : <ResturantSignUp />}
          {login ? (
            <p className="my-2">
              Do not have an Account ?{" "}
              <Link
                className="duration-200 hover:opacity-70 hover:underline"
                href="#"
                onClick={() => setLogin((prev) => !prev)}
              >
                {login ? "Create One" : "Login"}
              </Link>
            </p>
          ) : (
            <p className="my-2">
              Already Have an Account ?{" "}
              <Link
                className="duration-200 hover:opacity-70 hover:underline"
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
