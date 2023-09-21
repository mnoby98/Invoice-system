import { Link } from "react-router-dom";

function Button({ design, children, to, type }) {
  const base =
    "mt-2  w-48 sm:w-64 rounded-full  bg-[#04749B] focus:outline-none  focus:ring  focus:ring-offset-1 focus:ring-[#04749B]  p-2 text-center   text-white ";
  const styled = {
    primary: base,
  };

  if (to)
    return (
      <Link to={to} className={styled[design]}>
        {children}
      </Link>
    );
  if (type)
    return (
      <button type={type} className={styled[design]}>
        {children}
      </button>
    );

  return <button className={styled[design]}>{children}</button>;
}

export default Button;
