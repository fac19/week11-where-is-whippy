const hostname = window && window.location && window.location.hostname
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com"

// const postRequest = (endpoint) => {
//   return fetch(domain + endpoint, {
//     method: "post",
//     data: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .catch(console.log)
// }

// async function postSignUpInformation(state) {
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

function postSignUpInformation(state) {
  return fetch(domain + "/vendors/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  }).then((res) => {
    if (res.status !== 200) {
      console.error("API responded with ", res.status)
    }
    return res.json()
  })
}

export default postSignUpInformation
