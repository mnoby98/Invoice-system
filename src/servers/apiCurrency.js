import { useSelector } from "react-redux";
import useUser from "../Components/Login/useUser";

const Url = "https://api-invoices.twice-m.com/api";
export async function GetCurrency(userToken) {
  const res = await fetch(`${Url}/currencies`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + userToken,
      "Content-Type": "application/json",
    },
  });

  const data = res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
}

export async function EditCurrency(Currency) {
  const { title, symbol, id, status, userToken } = Currency;

  const res = await fetch(`${Url}/currencies/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
    body: JSON.stringify({
      title: title,
      symbol: symbol,
      status: status === "true" ? true : false,
    }),
  });
  const data = res.json();

  if (!res.ok) {
    throw data;
  }
  return data;
}
export async function CreateCurrency(Currency) {
  const { title, userToken, symbol, status } = Currency;
  const res = await fetch(`${Url}/currencies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
    body: JSON.stringify({
      title,
      symbol,
      status: status === "true" ? true : false,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }
  return data;
}
