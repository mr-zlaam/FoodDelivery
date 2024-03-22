import {} from "react";
import Button from "../../_reuseComp/Button/Button";

function ResturantLogin() {
  const inputClass =
    "outline-none py-2  px-4 rounded-md   border-[1px] focus:border-black shadow-black focus:border";
  return (
    <>
      <section className="px-6 ">
        <form className="w-fit mx-auto">
          <div className="my-2">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <br />
            <input
              required
              className={inputClass}
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="my-2">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <br />
            <input
              required
              className={inputClass}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="animated" className="shadow-md ">
              Login
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResturantLogin;
