// consider window.location object in order to assign domain appropriately
const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com";

const getRequest = (endpoint) => {
  return fetch(domain + endpoint)
    .then((res) => res.json())
    .catch(console.log);
};

export default getRequest;
