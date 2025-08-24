import { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";


const Toggle = () => {
  const [dark, setDark] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    
    <button onClick={() => setDark(!dark)}>
        <div className={`rounded-full w-[40px]  flex justify-center  h-[40px] items-center '
            ${dark ? "bg-gray-700" : 'bg-gray-300'}`}
            >
      {dark ? <MdOutlineWbSunny size='25' /> : <IoMoonOutline  size='20' /> }
      </div>
    </button>
    
  );
};

export default Toggle;
