"use client";
import { useState } from "react";
import Button from "../../_reuseComp/Button/Button";
import { useMessage } from "@/app/_customHooks/useMessage";
import formData from "./restaurantData.json";
import axios, { isAxiosError } from "axios";
function ResturantSignUp() {
  const { errorMessage, successMessage } = useMessage();

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
      console.log(result.data);
      if (!result.data.success) {
        return errorMessage("Restaurant already registered");
      } else {
        successMessage("Restaurant registered successfully");
      }
    } catch (e) {
      if (e instanceof Error) {
        errorMessage(`An error occurred: ${e.message}`);
      } else if (isAxiosError(e)) {
        if (e.response) {
          errorMessage(
            `Server error: ${e.response.status} - ${e.response.data.message}`
          );
        } else if (e.request) {
          errorMessage("No response received from the server");
        } else {
          errorMessage("Error setting up the request");
        }
      } else {
        errorMessage("An unknown error occurred");
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
                className="outline-none py-2  px-4 rounded-md   border-[1px] focus:border-green-700 shadow-black focus:border"
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
            <Button variant="animated" className="shadow-md w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResturantSignUp;
