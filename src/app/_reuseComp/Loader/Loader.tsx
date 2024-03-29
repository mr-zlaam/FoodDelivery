import {} from "react";
import "./Loader.scss";
function Loader() {
  return (
    <>
      <div className="flex flex-row gap-2 justify-center  h-full items-center">
        <div className="w-4 h-4 rounded-full bg-white/50 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-white/50 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-white/50 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </>
  );
}

export default Loader;
