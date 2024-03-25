"use client";
import { useState } from "react";
import Button from "../../_reuseComp/Button/Button";
import { useMessage } from "@/app/_customHooks/useMessage";
import formData from "./restaurantData.json";

function ResturantSignUp() {
  const { errorMessage, successMessage } = useMessage();

  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    resturantName: "",
    city: "",
    adress: "",
    contact: "",
  });
  const inputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  const handleSignUpForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formInputs.email) return errorMessage("Email is required");
    if (!formInputs.password) return errorMessage("Password is required");
    if (!formInputs.confirmpassword)
      return errorMessage("Please confirm the password");
    if (formInputs.password !== formInputs.confirmpassword)
      return errorMessage("Confirm password must be same as password");
    if (!formInputs.resturantName)
      return errorMessage("Restaurant's name is required");
    if (!formInputs.city) return errorMessage("City is required");
    if (!formInputs.adress) return errorMessage("Adress is required");
    if (!formInputs.contact) return errorMessage("Contact is required");
    if (typeof formInputs.contact !== "number")
      return errorMessage("Contact must be in number format");
    console.log("hello clicked");
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
