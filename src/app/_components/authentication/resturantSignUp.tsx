"use client";
import { useState } from "react";
import Button from "../../_reuseComp/Button/Button";
interface FormTypes {
  label: string;
  labelType: string;
  required: boolean;
  id: string;
  placeholder: string;
  name: string;
  type: "email" | "number" | "text" | "password" | undefined;
  uid: number;
}

function ResturantSignUp() {
  const formData: FormTypes[] = [
    {
      label: "Email",
      labelType: "email",
      type: "email",
      name: "email",
      required: true,
      id: "email",
      placeholder: "Email",
      uid: 1,
    },
    {
      label: "Password",
      labelType: "password",
      type: "password",
      name: "password",
      required: true,
      id: "password",
      placeholder: "Password",
      uid: 2,
    },
    {
      label: "Confirm Password",
      labelType: "confirmpassword",
      type: "password",
      name: "password",
      required: true,
      id: "confirmpassword",
      placeholder: "Confirm Password",
      uid: 3,
    },
    {
      label: "Resturant Name",
      labelType: "resturantname",
      type: "text",
      name: "resturantName",
      required: true,
      id: "resturantname",
      placeholder: " Resturant name",
      uid: 4,
    },
    {
      label: "City",
      labelType: "city",
      type: "text",
      name: "city",
      required: true,
      id: "city",
      placeholder: " City ",
      uid: 5,
    },
    {
      label: "Adress",
      labelType: "adress",
      type: "text",
      name: "adress",
      required: true,
      id: "adress",
      placeholder: "Adress",
      uid: 6,
    },
    {
      label: "Contact",
      labelType: "contact",
      type: "number",
      name: "contact",
      required: true,
      id: "contact",
      placeholder: " Contact Number ",
      uid: 7,
    },
  ];
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
    console.log(value);
  };
  const handleSignUpForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                required={data?.required}
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
