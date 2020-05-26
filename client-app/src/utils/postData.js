const hostname = window && window.location && window.location.hostname
const domain =
  hostname === "localhost"
    ? "http://localhost:3000"
    : "https://where-is-whippy.herokuapp.com"

// const postRequest = (endpoint) => {
//   return fetch(domain + endpoint, {
//     method: "post",
//     data: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .catch(console.log)
// }

async function postSignUpInformation(state) {
  const response = await fetch(domain + "/customers/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(state),
  })
  return await response.json()
}

export default postSignUpInformation
