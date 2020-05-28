// consider window.location object in order to assign domain appropriately
const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com/customers/coords";

const getCustomerCoords = () => {
  return (
    fetch("http://localhost:8080/customers/coords")
      // http://localhost:8080/customers/coords
      // localhosthttp://localhost:8080
      .then((res) => res.json())
      .then((jsonArr) => {
        const newArr = jsonArr.map((coordsObj) => {
          return { lat: coordsObj.latitude, lng: coordsObj.longitude };
        });
        return newArr;
      })
      .catch((err) => console.log(err))
  );
};
// : "https://where-is-whippy.herokuapp.com";

// const getCustomerCoords = (endpoint) => {
//   return fetch(domain + endpoint)
//     .then((res) => res.json())
//     .catch(console.log);
// };

export { getCustomerCoords };
