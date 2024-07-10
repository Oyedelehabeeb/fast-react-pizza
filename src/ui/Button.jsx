/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm  rounded-full font-semibold uppercase text-stone-800 tracking-wide hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " px-4 py-2.5 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "  rounded-full text-sm font-semibold uppercase text-stone-400 tracking-wide hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed border border-stone-300  px-4 py-2.5 md:px-6 md:py-3.5 ",
  };

  if (onClick)
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
