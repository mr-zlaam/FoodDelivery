import {} from "react";
import Button from "../_reuseComp/Button/Button";

function ResturantLogin() {
  return (
    <>
      <section className="">
        <form className="">
          <div className="my-2">
            <label htmlFor="email">Email</label>
            <br />
            <input
              required
              className="outline-none py-2 px-4 rounded-md font-semibold"
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password">Password</label>
            <br />
            <input
              required
              className="outline-none py-2 px-4 rounded-md font-semibold"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex justify-end">
            <Button variant="primary" className="">
              Login
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ResturantLogin;
