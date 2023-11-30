import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import CreateCurrency from "../../Pages/currency/CreateCurrency";
import { useNavigate } from "react-router-dom";
import { addCurrency, editCurrency } from "./CurrenctSlice";

function AddCurrency({ currency, setNoData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state?.user?.token);

  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr_1fr] items-center  justify-items-center bg-white   px-4 py-2  text-black">
        <p>{currency.title} </p>
        <p>{currency.symbol} </p>
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(`/edit-currency/${currency.id}`);
          }}
          design="active"
        >
          edit
        </Button>
      </div>
    </div>
  );
}

export default AddCurrency;
