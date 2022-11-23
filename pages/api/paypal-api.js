import Promise from 'promise'
export const createOrder = async function (CLIENT_ID, APP_SECRET, base) {
  console.log('check in createOrder ClientID',CLIENT_ID)
  console.log('check in createOrder AppSecret',APP_SECRET)
  console.log('check in createOrder base',base)

  const accessToken = await generateAccessToken(CLIENT_ID, APP_SECRET, base);
  const url = `${base}/v2/checkout/orders`;
  const response = await Promise.all (  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: "20.00",
          },
        },
      ],
    }),
  }));

  return handleResponse(response);
}

const generateAccessToken = async function (CLIENT_ID, APP_SECRET, base) {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const jsonData = await handleResponse(response);
  return jsonData.access_token;
}

async function handleResponse(response) {
  /*
  .then((res)=> {
      return res.json;
    })
    .then((res)=> {
      return res['orderId']
    });
   */
  if (response.status === 200 || response.status === 201) {
    console.log('check response of createOrder', response)
    const cc = response.json()
      .then((res)=>{
        const dd = res['orderId']
        console.log('dd', dd)
      })


    console.log('cc', cc)
    return response.json()

  }
  const errorMessage = await response.text();
  throw new Error(errorMessage);
}

export const capturePayment = async function (CLIENT_ID, APP_SECRET, base, orderId) {
  const accessToken = await generateAccessToken(CLIENT_ID, APP_SECRET, base);
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
}

export default {
  capturePayment,
  generateAccessToken,
  createOrder,
}