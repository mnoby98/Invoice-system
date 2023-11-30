const Url = "https://api-invoices.twice-m.com/api";

async function loginApi(emailAndPassword) {
  const res = await fetch(`${Url}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailAndPassword),
  });

  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function GetCurrentUser(tokenValue) {
  const res = await fetch(`${Url}/user`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenValue,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    alert("data from geterrocurrency", data);
    throw data;
  }
  return data;
}

export async function getOtp(email) {
  const res = await fetch(`${Url}/auth/request-otp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export async function putOTP(emailAndOtp) {
  const res = await fetch(`${Url}/auth/verify-otp`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailAndOtp),
  });
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}
export async function changePassword(EOPP) {
  //EOPP Email OTP  NewPassword ConfirmNew-Password
  console.log("EOPP", EOPP);
  const res = await fetch(`${Url}/auth/change-otp-password`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(EOPP),
  });
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export default loginApi;
