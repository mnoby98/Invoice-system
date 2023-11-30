import { Link } from "react-router-dom";

function Button({ design, children, onClick, to, type, disabled }) {
  const base =
    "mt-2  w-48 sm:w-64 rounded-md  bg-[#7e3af2] focus:outline-none  focus:ring  focus:ring-offset-1 focus:ring-[#7e3af2]  p-2 text-center   text-white ";
  const styled = {
    primary: base,
    active:
      "rounded-lg bg-[#9053fa] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#7e3af2] visited:text-white hover:bg-[#7e3af2] hover:text-white focus:bg-[#7e3af2]  focus:text-white",
    addItem:
      "rounded-lg w-full bg-[#9053fa] px-3 py-1 font-semibold text-white transition-all  duration-300 visited:bg-[#7e3af2] visited:text-white hover:bg-[#7e3af2 hover:text-white focus:bg-[#7e3af2]  focus:text-white",
    visit:
      "rounded-lg px-3 py-1 font-semibold transition-all duration-300 visited:bg-[#9053fa] visited:text-white hover:bg-[#7e3af2] hover:text-white focus:bg-[#7e3af2]  focus:text-white",
  };

  if (to)
    return (
      <Link to={to} type="submit" className={styled[design]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button type={type} onClick={onClick} className={styled[design]}>
        {children}
      </button>
    );
  if (type)
    return (
      <button type={type} disabled={disabled} className={styled[design]}>
        {children}
      </button>
    );

  return <button className={styled[design]}>{children}</button>;
}

export default Button;
