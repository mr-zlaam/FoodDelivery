import {} from "react";
import ResturantLogin from "../_components/resturantLogin";
import ResturantSignUp from "../_components/resturantSignUp";

function ResturantPage() {
  return (
    <>
      <section>
        <ResturantLogin />
        <ResturantSignUp />
      </section>
    </>
  );
}

export default ResturantPage;
