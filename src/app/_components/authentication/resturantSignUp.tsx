"use client";
import { useState } from "react";
import Button from "../../_reuseComp/Button/Button";
import { useMessage } from "@/app/_customHooks/useMessage";
import formData from "./restaurantData.json";
import axios, { isAxiosError } from "axios";
import { useLoading } from "@/app/_customHooks/useLoading";
import Loader from "@/app/_reuseComp/Loader/Loader";
function ResturantSignUp() {
  const { errorMessage, successMessage } = useMessage();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    resturantName: "",
    city: "",
    address: "",
    contact: "",
  });
  const inputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleSignUpForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      email,
      password,
      address,
      city,
      confirmpassword,
      contact,
      resturantName,
    } = formInputs;
    if (
      !password ||
      !email ||
      !confirmpassword ||
      !address ||
      !city ||
      !contact ||
      !resturantName
    ) {
      return errorMessage("All field are required");
    } else if (password !== confirmpassword) {
      return errorMessage("Password do not match !");
    }
    try {
      startLoading();
      let result = await axios.post(
        "http://localhost:3000/api/restaurants",
        {
          email,
          password,
          name: resturantName,
          contact,
          city,
          address,
        },
        { withCredentials: true }
      );
      stopLoading();
      if (!result.data.success) {
        return errorMessage("Restaurant already registered");
        stopLoading();
      } else {
        successMessage("Restaurant registered successfully");
        stopLoading();
      }
    } catch (e) {
      if (e instanceof Error) {
        errorMessage(`An error occurred: ${e.message}`);
      } else if (isAxiosError(e)) {
        if (e.response) {
          stopLoading();
          return errorMessage(`Server error:: Internal server error `);
        } else if (e.request) {
          stopLoading();
          return errorMessage("No response received from the server");
        } else {
          stopLoading();
          return errorMessage("Error setting up the request");
        }
      } else {
        stopLoading();
        return errorMessage("An unknown error occurred");
      }
    }
  };
  return (
    <>
      <section className="px-6">
        <form className="w-fit  mx-auto" onSubmit={handleSignUpForm}>
          {formData?.map((data) => (
            <div className="my-2" key={data.uid}>
              <label htmlFor={data.labelType} className="font-semibold">
                {data?.label}
              </label>
              <br />
              <input
                autoComplete="on"
                className="outline-none py-2  px-4 rounded-md   border-[1px] border-black/30 focus:border-green-700 shadow-black focus:border"
                type={data.type}
                name={data.name}
                id={data.id}
                placeholder={data.placeholder}
                value={formInputs[data.name as keyof typeof formInputs]}
                onChange={inputChanges}
              />
            </div>
          ))}

          <div className="flex justify-end">
            <Button
              disabled={isLoading}
              variant="animated"
              className={`shadow-md w-full h-[50px] ${
                isLoading && "cursor-default"
              }`}
            >
              {isLoading ? <Loader /> : "Sign Up"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResturantSignUp;
