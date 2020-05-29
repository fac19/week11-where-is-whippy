const hostname = window && window.location && window.location.hostname;
const domain =
  hostname === "localhost"
    ? "http://localhost:8080"
    : "https://where-is-whippy.herokuapp.com/customers/coords";

const getCustomerCoords = () => {
  return fetch(domain + "/customers/coords")
    .then((res) => res.json())
    .then((jsonArr) => {
      const newArr = jsonArr.map((coordsObj) => {
        return { lat: coordsObj.latitude, lng: coordsObj.longitude };
      });
      return newArr;
    })
    .catch((err) => console.log(err));
};

export { getCustomerCoords };
