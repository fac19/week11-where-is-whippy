const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com";

function postVendorSignUpInformation(state) {
  return fetch(domain + "/vendors/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
}

function postCustomerSignUpInformation(state) {
  return fetch(domain + "/customers/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  });
}

export { postVendorSignUpInformation, postCustomerSignUpInformation };

// const postRequest = (endpoint) => {
//   return fetch(domain + endpoint, {
//     method: "post",
//     data: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .catch(console.log)
// }

// async function postVendorSignUpInformation(state) {
//   const response = await fetch(domain + "/customers/signup", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(state),
//   })
//   console.log(await response.json())
//   return await response.json()
// }
