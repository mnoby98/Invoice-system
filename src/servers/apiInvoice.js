const Url = "https://api-invoices.twice-m.com/api";
export async function getInvoiceList(userToken) {
  console.log("userToken form Api", userToken);
  const res = await fetch(`${Url}/invoices`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  });

  const data = res.json();
  if (!res.ok) {
    throw data;
  }

  return data;
}

export async function getInvoiceWithId(invoiceData) {
  const { invoiceId, userToken } = invoiceData;

  const res = await fetch(`${Url}/invoices/${invoiceId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  });
  const data = res.json();
  if (!res.ok) throw data;

  return data;
}

export async function createInvoice(invoiceCreated) {
  const { userToken, title, description, currency_id, total, totals } =
    invoiceCreated;
  const res = await fetch(`${Url}/invoices`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
    body: JSON.stringify({ title, description, currency_id, total, totals }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function editInvoice(editDataWithToken) {
  console.log("editDataWithToken form API", editDataWithToken);
  const {
    totals,
    currency_id,
    invoice_status_id,
    description,
    // payment_info,
    title,
    total,
    userToken,
  } = editDataWithToken;
  const res = await fetch(`${Url}/invoices/${invoice_status_id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
    body: JSON.stringify({
      currency_id,
      invoice_status_id,
      description,
      // payment_info,
      title,
      total,
      totals,
    }),
  });
  const data = await res.json();

  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function deleteInvoice(deleteData) {
  const { id, userToken } = deleteData;
  console.log("userToken from api", userToken);
  console.log("Id from api", id);
  const res = await fetch(`${Url}/invoices/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + userToken,
    },
  });
  const data = res.json();

  if (!res.ok) {
    throw data;
  }
  return data;
}
