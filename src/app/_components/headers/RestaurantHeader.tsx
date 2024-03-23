import Link from "next/link";
import {} from "react";

function RestaurantHeader() {
  return (
    <>
      <header className="shadow-lg bg-[#f0f8ffdc] flex items-center justify-around sticky top-0 z-10">
        <div className="logo">
          <Link title="Home" href="/">
            <img src="/logo.png" alt="logo" width={80} />
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Login/SignUp</Link>
          </li>
          <li>
            <Link href="#">Profile</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default RestaurantHeader;
