export async function payment() {
  try {
    const res = await fetch(
      "https://secure-egypt.paytabs.com/payment/request",
      {
        method: "POST",
        headers: {
          authorization: "SHJ99HT9G6-JH6W9L2DHL-JWR99DLMRL",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          profile_id: "133729",
          tran_type: "sale",
          tran_class: "ecom",
          cart_id: "cart_11111", //
          cart_currency: "EGP", //
          cart_amount: 12.3, // total cart $
          cart_description: "Description of the items/services", //
          paypage_lang: "en",
          customer_details: {
            // need after cart page with add a cart req.
            name: "first last",
            email: "email@domain.com",
            phone: "0522222222",
            street1: "address street",
            city: "dubai",
            state: "du",
            country: "AE",
            zip: "12345",
          },
          shipping_details: {
            // no need
            name: "name1 last1",
            email: "email1@domain.com",
            phone: "971555555555",
            street1: "street2",
            city: "dubai",
            state: "dubai",
            country: "AE",
            zip: "54321",
          },
          callback: "https://yourdomain.com/yourcallback",
          return: "http://localhost:3000",
        }),
      },
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
