import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import CreateCurrency from "../../Pages/currency/CreateCurrency";
import { useNavigate } from "react-router-dom";

function AddCurrency({ currency }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr_1fr] justify-items-center   px-4 py-3  text-black">
        <p>{currency.title} </p>
        <p>{currency.symbol} </p>
        <button
          to="/edit-currency"
          onClick={(e) => {
            e.preventDefault();
            console.log("eeeeeeee", currency.title);
          }}
          design="active"
        >
          edit
        </button>
      </div>
    </div>
  );
}

export default AddCurrency;
